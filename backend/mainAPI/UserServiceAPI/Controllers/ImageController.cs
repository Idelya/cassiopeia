using Data.Enums;
using ImageServiceAPI.DTOs;
using MainAPI.DTOs;
using MainAPI.MicroServicesConfig;
using Microsoft.AspNetCore.Mvc;

namespace MainAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : Controller
    {
        public string ImageBaseUrl = $"{ImageServiceConfig.IMAGE_SERVICE_BASE_URL}/{ImageServiceConfig.IMAGE_CONTROLLER_NAME}";

        
        [HttpGet("get")]
        public async Task<ActionResult> GetImagesFromOffer(int offerId)
        {
            var url = $"{ImageBaseUrl}/{ImageServiceConfig.GET_IMAGES}?offerId={offerId}";
            return await RedirectRequest(url);
        }

        [HttpGet("file/{fileName}")]
        public async Task<ActionResult> GetImage([FromRoute] string fileName)
        {
            var url = $"{ImageBaseUrl}/{ImageServiceConfig.GET_FILE}/{fileName}";
            return await RedirectRequest(url);
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddOfferImage([FromForm] AddOfferImageRequest request)
        {
            var url = $"{ImageBaseUrl}/{ImageServiceConfig.ADD_IMAGE}";
            return await RedirectWithFormFileAsync(url, RequestMethod.Post, request);
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> DeleteOfferImages([FromBody] DeleteImageRequest request)
        {
            var url = $"{ImageBaseUrl}/{ImageServiceConfig.DELETE_IMAGE}";
            return await RedirectRequest(url, RequestMethod.Delete, request);
        }

        private async Task<ActionResult> RedirectRequest(string url, RequestMethod method = RequestMethod.Get, object body = null)
        {
            var t = await Services.HttpClient.SendRequestAsync(url, method, body);
            return StatusCode((int)t.StatusCode, t.Content.ReadAsStringAsync().Result);
        }

        private async Task<ActionResult> RedirectWithFormFileAsync(string url, RequestMethod method = RequestMethod.Get, AddOfferImageRequest body = null)
        {
            var t = await Services.HttpClient.SendWithFormFileAsync(url, method, body);
            return StatusCode((int)t.StatusCode, t.Content.ReadAsStringAsync().Result);
        }
    }
}
