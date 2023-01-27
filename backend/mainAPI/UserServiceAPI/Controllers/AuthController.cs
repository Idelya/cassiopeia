using MainAPI.DTOs;
using MainAPI.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MainAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        public readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ActionResult> Login(LoginRequest loginRequest)
        {
            var token = await _authService.Login(loginRequest);
            if (token != null)
                return Ok(token);

            return Unauthorized();
        }

        [HttpGet("benchmark")]
        [AllowAnonymous]
        public ActionResult Benchmark()
        {
            Task.Delay(10_000).GetAwaiter().GetResult();

            return Ok();
        }

        [HttpGet("benchmark-async")]
        [AllowAnonymous]
        public async Task<ActionResult> BenchmarkAsync()
        {
            await Task.Delay(10_000);

            return Ok();
        }

        [HttpGet("compute-benchmark")]
        [AllowAnonymous]
        public ActionResult ComputeBenchmark()
        {
            long result = 10;

            for (int i = 2; i < 300_000_000; i++)
            {
                if(i % 2 == 0)
                    result += i;
                else
                    result -= i;
            }

            return Ok(result);
        }

        [HttpGet("sleep-benchmark")]
        [AllowAnonymous]
        public ActionResult SleepBenchmark()
        {
            Thread.Sleep(10_000);

            return Ok();
        }
    }
}