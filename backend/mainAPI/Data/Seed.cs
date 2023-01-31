﻿using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace Data
{
    public static class Seed
    {
        public static async Task Initialization(AuthContext context, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            await SeedRoles(roleManager);
            await SeedUsers(context, userManager);
        }

        private static async Task SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            if (!await roleManager.RoleExistsAsync(Roles.Roles.Administrator))
            {
                var adminRole = new IdentityRole(Roles.Roles.Administrator);
                await roleManager.CreateAsync(adminRole);
            }

            if (!await roleManager.RoleExistsAsync(Roles.Roles.Seller))
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

        private static async Task SeedUsers(AuthContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                const string adminEmail = "admin@workspace.com";
                const string adminLastName = "Admin";
                const string adminFirstName = "Admin";
                const string adminPassword = "Admin123!";

                var adminAccount = await userManager.FindByEmailAsync(adminEmail);
                if (adminAccount == null)
                {
                    var admin = new User
                    {
                        Id = "1",
                        Firstname = adminFirstName,
                        Lastname = adminLastName,
                        UserName = adminEmail,
                        Email = adminEmail,
                    };

                    var resultA = await userManager.CreateAsync(admin, adminPassword);
                    if (resultA.Succeeded)
                    {
                        await userManager.AddToRoleAsync(admin, Roles.Roles.Administrator);
                    }
                }

                var sellers = new List<User>
                {
                    new User
                    {
                        Id = "2",
                        Firstname = "Jan",
                        Lastname = "Kwiatkowski",
                        UserName = "kwiatkowski@workspace.com",
                        Email = "kwiatkowski@workspace.com",
                    },
                     new User
                    {
                        Id = "3",
                        Firstname = "Adam",
                        Lastname = "Stary",
                        UserName = "adam@workspace.com",
                        Email = "adam@workspace.com",
                    },
                      new User
                    {
                        Id = "4",
                        Firstname = "Amelia",
                        Lastname = "Firchild",
                        UserName = "firchid@workspace.com",
                        Email = "firchild@workspace.com",
                    }
                };

                foreach (var seller in sellers)
                {
                    var result = await userManager.CreateAsync(seller, "Password123!");
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(seller, Roles.Roles.Seller);
                    }
                }

                var buyers = new List<User>() {
                    new User
                    {
                        Id = "5",
                        Firstname = "Anna",
                        Lastname = "Miła",
                        UserName = "mila@workspace.com",
                        Email = "mila@workspace.com",
                    },
                    new User
                    {
                        Id = "6",
                        Firstname = "Miłosz",
                        Lastname = "Stracber",
                        UserName = "stracber@workspace.com",
                        Email = "stracber@workspace.com",
                    },
                    new User
                    {
                        Id = "7",
                        Firstname = "Krzysztof",
                        Lastname = "Buricki",
                        UserName = "buricki@workspace.com",
                        Email = "buricki@workspace.com",
                    },
                    new User
                    {
                        Id = "8",
                        Firstname = "Stella",
                        Lastname = "Sardothien",
                        UserName = "sardothien@workspace.com",
                        Email = "sardothien@workspace.com",
                    }
                };

                foreach (var buyer in buyers)
                {
                    var result = await userManager.CreateAsync(buyer, "Password123!");
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(buyer, Roles.Roles.Seller);
                    }
                }
            }
        }
    }
}