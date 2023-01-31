using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Seed
{
    public static class ObjectSeed
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            const string adminEmail = "admin@workspace.com";
            const string adminLastName = "Admin";
            const string adminFirstName = "Admin";

            modelBuilder.Entity<User>()
                .HasData(
                    new User
                    {
                        ID = "1",
                        Firstname = adminFirstName,
                        Lastname = adminLastName,
                        Username = adminEmail,
                        Email = adminEmail,
                    },
                    new User
                    {
                        ID = "2",
                        Firstname = "Jan",
                        Lastname = "Kwiatkowski",
                        Username = "kwiatkowski@workspace.com",
                        Email = "kwiatkowski@workspace.com",
                    },
                     new User
                     {
                         ID = "3",
                         Firstname = "Adam",
                         Lastname = "Stary",
                         Username = "adam@workspace.com",
                         Email = "adam@workspace.com",
                     },
                      new User
                      {
                          ID = "4",
                          Firstname = "Amelia",
                          Lastname = "Firchild",
                          Username = "firchID@workspace.com",
                          Email = "firchild@workspace.com",
                      },
                    new User
                    {
                        ID = "5",
                        Firstname = "Anna",
                        Lastname = "Miła",
                        Username = "mila@workspace.com",
                        Email = "mila@workspace.com",
                    },
                    new User
                    {
                        ID = "6",
                        Firstname = "Miłosz",
                        Lastname = "Stracber",
                        Username = "stracber@workspace.com",
                        Email = "stracber@workspace.com",
                    },
                    new User
                    {
                        ID = "7",
                        Firstname = "Krzysztof",
                        Lastname = "Buricki",
                        Username = "buricki@workspace.com",
                        Email = "buricki@workspace.com",
                    },
                    new User
                    {
                        ID = "8",
                        Firstname = "Stella",
                        Lastname = "Sardothien",
                        Username = "sardothien@workspace.com",
                        Email = "sardothien@workspace.com",
                    }
                );
        }
    }
}