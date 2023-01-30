using Data.Enums;
using MainAPI.DTOs;
using MainAPI.Interfaces;
using MainAPI.MicroServicesConfig;
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

        [HttpGet("users")]
        public async Task<ActionResult> GetUsersAsync()
        {
            var url = $"{UserServiceConfig.USER_SERVICE_BASE_URL}/{UserServiceConfig.CONTROLLER_NAME}/{UserServiceConfig.GET_USERS}";
            var t = await Services.HttpClient.SendRequestAsync(url, RequestMethod.Get);
            return this.StatusCode((int) t.StatusCode, t.Content.ReadAsStringAsync().Result);
        }

        [HttpPost("ban")]
        public async Task<ActionResult> BanUser([FromBody] UserBanRequest request)
        {
            var url = $"{UserServiceConfig.USER_SERVICE_BASE_URL}/{UserServiceConfig.CONTROLLER_NAME}/{UserServiceConfig.BAN_USER}";
            var t = await Services.HttpClient.SendRequestAsync(url, RequestMethod.Get, request);
            return this.StatusCode((int)t.StatusCode, t.Content.ReadAsStringAsync().Result);
        }
    }
}
