using Data.Models;

namespace MainAPI.Interfaces
{
    public interface IJWTService
    {
        Task<string> GenerateJWToken(User user);
    }
}
