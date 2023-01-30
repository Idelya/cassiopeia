using Data.Enums;
using MainAPI.DTOs;
using MainAPI.MicroServicesConfig;
using Microsoft.AspNetCore.Mvc;

namespace MainAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        public string OrderBaseUrl = $"{ShoppingServiceConfig.SHOPPING_SERVICE_BASE_URL}/{ShoppingServiceConfig.ORDER_CONTROLLER_NAME}";

        [HttpPost("buy")]
        public async Task<ActionResult> SumitOrder([FromBody] OrderRequest request)
        {
            var url = $"{OrderBaseUrl}/{ShoppingServiceConfig.BUY}";
            return await RedirectRequest(url, request);
        }

        private async Task<ActionResult> RedirectRequest(string url, object body = null)
        {
            var t = await Services.HttpClient.SendRequestAsync(url, RequestMethod.Get, body);
            return StatusCode((int)t.StatusCode, t.Content.ReadAsStringAsync().Result);
        }
    }
}
