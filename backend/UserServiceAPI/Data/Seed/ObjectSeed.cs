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
                        Firstname = "Anna",
                        Lastname = "Miła",
                        Username = "mila@workspace.com",
                        Email = "mila@workspace.com",
                    }
                );
        }
    }
}