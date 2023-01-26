using Data;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace MainAPI.Services
{
    public class Service
    {

        public AuthContext Context { get; }
        public UserManager<User> UserManager { get; }
        public SignInManager<User> SignInManager { get; }

        public Service(IServiceProvider serviceProvider)
        {
            Context = serviceProvider.GetService<AuthContext>();
            UserManager = serviceProvider.GetService<UserManager<User>>();
            SignInManager = serviceProvider.GetService<SignInManager<User>>();
        }

    }
}
