using Microsoft.AspNetCore.Mvc;
using ShoppingServiceAPI.DTOs;
using ShoppingServiceAPI.Interfaces;

namespace ShoppingServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferController : Controller
    {
        public readonly IOfferService offerService;

        public OfferController(IOfferService _offerService)
        {
            offerService = _offerService;
        }

        [HttpGet("all")]
        public ActionResult<IEnumerable<OfferResponse>> GetOffers()
        {
            return Ok(offerService.GetOffers());
        }

        [HttpGet("all/{id}")]
        public ActionResult<IEnumerable<OfferResponse>> GetOfferPublishBySeller([FromRoute] string id)
        {
            return Ok(offerService.GetOffersPublishByUser(id));
        }

        [HttpPost("edit")]
        public async Task<ActionResult<IEnumerable<OfferResponse>>> EditOfferAsync([FromBody] OfferEditRequest request)
        {
            var result = await offerService.EditOffers(request);
            if (result)
                return Ok();
            else return Conflict();
        }

        [HttpPost("create")]
        public async Task<ActionResult<IEnumerable<OfferResponse>>> CreateOffer([FromBody] CreateOfferRequest request)
        {
            var result = await offerService.AddOffer(request);
            if (result)
                return Ok();
            else return Conflict();
        }

        [HttpGet("{id}")]
        public ActionResult<OfferResponse> GetOffer([FromRoute] int id)
        {
            return Ok(offerService.GetOffer(id));
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteOffer([FromRoute] int id)
        {
            var t = Ok(offerService.DeleteOffer(id));
            return t;
        }


        [HttpGet("delivery")]
        public ActionResult<IEnumerable<DeliveryResponse>> GetDeliveries()
        {
            return Ok(offerService.GetDeliveries());
        }
    }
}