using Microsoft.AspNetCore.Mvc;

namespace ShoppingServiceAPI.Controllers
{
    public class OrderController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
