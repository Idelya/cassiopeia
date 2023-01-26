using MainAPI.DTOs;
using MainAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MainAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
        {

            public UserController(IAuthService authService)
            {
            }

            public async Task<ActionResult> Test()
            {
            //var postParams = new Dictionary<string, string> { { "cardNumber", "5" }, { "country", "aa" } };
            Services.HttpClient.SendRequest<LoginResponse>("https://localhost:5001", Data.Enums.RequestMethod.Get, "WeatherForecast", null);
            return null;

        }

    }
}
