using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using UserServiceAPI.DTOs;
using UserServiceAPI.Interfaces;

namespace UserServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        public readonly IUserService userService;

        public UserController(IUserService _userService) { 
            userService = _userService;
        }

        [HttpGet("all")]
        public ActionResult<IEnumerable<UserResponse>> GetUsers()
        {
            return Ok(userService.GetUsers());
        }

        [HttpPost("ban")]
        public async Task<ActionResult> BanUser([FromBody] BanRequest request) {
            var result = await  userService.BanUser(request);
            if (result)
                return Ok();

            return Conflict();
        }


    }
}