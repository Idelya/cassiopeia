using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace Data
{
    public static class Seed
    {
        public static async Task Initialization(AuthContext context, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            await SeedRoles(roleManager);
        }

        private static async Task SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            if (!await roleManager.RoleExistsAsync(Roles.Roles.Administrator))
            {
                var adminRole = new IdentityRole(Roles.Roles.Administrator);
                await roleManager.CreateAsync(adminRole);
            }

            if (!await roleManager.RoleExistsAsync(Roles.Roles.Administrator))
            {
                var sellerRole = new IdentityRole(Roles.Roles.Seller);
                await roleManager.CreateAsync(sellerRole);
            }

            if (!await roleManager.RoleExistsAsync(Roles.Roles.Buyer))
            {
                var buyerRole = new IdentityRole(Roles.Roles.Buyer);
                await roleManager.CreateAsync(buyerRole);
            }
        }
    }
}