using Data.Enums;
using MainAPI.DTOs;
using MainAPI.MicroServicesConfig;
using Microsoft.AspNetCore.Mvc;

namespace MainAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferController : Controller
    {
        public string OfferBaseUrl = $"{ShoppingServiceConfig.SHOPPING_SERVICE_BASE_URL}/{ShoppingServiceConfig.OFFER_CONTROLLER_NAME}";

        [HttpGet("all")]
        public async Task<ActionResult> GetOfferAsync()
        {
            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.GET_OFFERS}";
            return await RedirectRequest(url);
        }

        [HttpGet("user/{id}")]
        public async Task<ActionResult> GetOfferPublishBySellerAsync([FromRoute] string id)
        {
            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.GET_OFFERS}/{id}";
            return await RedirectRequest(url);
        }

        [HttpPost("edit")]
        public async Task<ActionResult> EditOfferAsync([FromBody] OfferEditRequest request)
        {
            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.EDIT_OFFER}";
            return await RedirectRequest(url, request);
        }

        private async Task<ActionResult> RedirectRequest(string url, object body = null)
        {
            var t = await Services.HttpClient.SendRequestAsync(url, RequestMethod.Get, body);
            return StatusCode((int)t.StatusCode, t.Content.ReadAsStringAsync().Result);
        }
    }
}
