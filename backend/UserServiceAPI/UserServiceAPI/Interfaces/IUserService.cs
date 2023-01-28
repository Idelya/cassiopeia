using UserServiceAPI.DTOs;

namespace UserServiceAPI.Interfaces
{
    public interface IUserService
    {
        IEnumerable<UserResponse> GetUsers();
        Task<bool> BanUser(BanRequest userID);
    }
}
