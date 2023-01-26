using Data.Models;
using MainAPI.DTOs;

namespace MainAPI.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponse> Login(LoginRequest request);
        Task<string> UserRole(User user);
    }
}
