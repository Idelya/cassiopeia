using AutoMapper;
using Data;
using Microsoft.AspNetCore.Mvc;
using UserServiceAPI.DTOs;
using UserServiceAPI.Interfaces;

namespace UserServiceAPI.Services
{
    public class UserService : Service, IUserService
    {
        private readonly IMapper _mapper;

        public UserService(IServiceProvider service, IMapper mapper) : base(service)
        {
            _mapper = mapper;
        }

        public IEnumerable<UserResponse> GetUsers()
        {
            return Context.Users.Select(x => _mapper.Map<UserResponse>(x)).ToList();
        }

        public async Task<bool> BanUser(BanRequest request)
        {
            var user = Context.Users.FirstOrDefault(x => x.ID == request.UserId);
            if (user == null)
                return false;

            user.Ban = true;
            user.BanReason = request.Reason;


            Context.Users.Update(user);

            if (await Context.SaveChangesAsync() == 0)
                return false;
            return true;
        }
    }
}
