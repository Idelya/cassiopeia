using Microsoft.AspNetCore.Mvc;
using ShoppingServiceAPI.DTOs;
using ShoppingServiceAPI.Interfaces;

namespace ShoppingServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class OrderController : Controller
    {
        public readonly IOrderService orderService;

        public OrderController(IOrderService offerService)
        {
            this.orderService = offerService;
        }

        [HttpPost("buy")]
        public async Task<ActionResult> SubmitOrderAsync([FromBody] OrderRequest request)
        {
            var result = await orderService.SubmitOrder(request);
            if (result)
                return Ok();
            return Conflict(result);

        }
    }
}
