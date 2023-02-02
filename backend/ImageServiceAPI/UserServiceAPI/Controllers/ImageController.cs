using Microsoft.AspNetCore.Mvc;
using ImageServiceAPI.DTOs;
using ImageServiceAPI.Interfaces;

namespace ImageServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : Controller
    {
        public readonly IImageService imageService;

        public ImageController(IImageService _imageService)
        {
            imageService = _imageService;
        }

        [HttpGet("get")]
        public ActionResult<IEnumerable<ImageDto>> GetImagesFromOffer(int offerId)
        {
            var result = imageService.GetImageInfosByOfferId(offerId);
            return Ok(result);
        }

        [HttpGet("file/{fileName}")]
        public IActionResult GetImage([FromRoute] string fileName)
        {
            var result = imageService.GetImageDataDto(fileName);
            return File(result.Bytes, result.ContentType);
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddOfferImage([FromForm] AddOfferImageRequest request)
        {
            var result = await imageService.AddOfferImage(request);
            if (result)
                return Ok();
            else return Conflict();
        }

        [HttpPut("edit")]
        public async Task<ActionResult> EditOfferImages([FromBody] EditOfferImageRequest request)
        {  
            var result = await imageService.EditImages(request);
            if (result)
                return Ok();
            else return Conflict();
        }
    }
}