using Data;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace UserServiceAPI.Services
{
    public class Service
    {
        public UserContext Context { get; }
        public UserManager<User> UserManager { get; }
        public SignInManager<User> SignInManager { get; }

        public Service(IServiceProvider serviceProvider)
        {
            Context = serviceProvider.GetService<UserContext>();
            UserManager = serviceProvider.GetService<UserManager<User>>();
        }
    }
}
