using AutoMapper;
using Data;
using UserServiceAPI.DTOs;
using UserServiceAPI.Interfaces;

namespace UserServiceAPI.Services
{
    public class UserService : ServiceCollection, IUserService
    {
        private readonly IMapper _mapper;

        public UserService(IServiceProvider service, IMapper mapper) : base(service)
        {
            _mapper = mapper;
        }

    public IEnumerable<UserResponse> GetUsers()
        {
            using(var db = new UserContext())
            {

            }
        }
    }
}
