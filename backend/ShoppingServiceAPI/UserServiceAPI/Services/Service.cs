using Data;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace ShoppingServiceAPI.Services
{
    public class Service
    {
        public ShoppingContext Context { get; }
        public UserManager<Purchase> UserManager { get; }
        public SignInManager<Purchase> SignInManager { get; }

        public Service(IServiceProvider serviceProvider)
        {
            Context = serviceProvider.GetService<ShoppingContext>();
            UserManager = serviceProvider.GetService<UserManager<Purchase>>();
            SignInManager = serviceProvider.GetService<SignInManager<Purchase>>();
        }
    }
}