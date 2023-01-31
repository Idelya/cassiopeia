using Data.Models;
using MainAPI.DTOs;
using MainAPI.Interfaces;

namespace MainAPI.Services
{
    public class AuthService : Service, IAuthService
    {
        public readonly IJWTService _jwtService;

        public AuthService(IServiceProvider serviceProvider, IJWTService jwtService) : base(serviceProvider)
        {
            _jwtService = jwtService;
        }

        public async Task<LoginResponse> Login(LoginRequest request)
        {
            var user = await UserManager.FindByNameAsync(request.Username);
            if (user == null)
                return null;

            var result = SignInManager.CheckPasswordSignInAsync(user, request.Password, false).Result;

            if (!result.Succeeded)
                return null;

            var token = await _jwtService.GenerateJWToken(user);
            var role = await UserRole(user);


            var response = new LoginResponse() { Token = token, UserRole = role, UserId = user.Id};

            return response;
        }

        public async Task<string> UserRole(User user)
        {
            return (await UserManager.GetRolesAsync(user))[0];
        }
    }
}