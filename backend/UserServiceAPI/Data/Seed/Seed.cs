//using Data.Models;

//namespace Data
//{
//    public static class Seed
//    {
//        public static async Task Initialization(UserContext context)
//        {
//            await SeedUsers(context);
//        }

//        private static async Task SeedUsers(UserContext context)
//        {
//            if (context.Users.Count() == 0)
//            {
//                const string adminEmail = "admin@workspace.com";
//                const string adminLastName = "Admin";
//                const string adminFirstName = "Admin";

//                var users = new List<User>() {
//                    new User
//                    {
//                        ID = "1",
//                        Firstname = adminFirstName,
//                        Lastname = adminLastName,
//                        Username = adminEmail,
//                        Email = adminEmail,
//                    },
//                    new User
//                    {
//                        ID = "2",
//                        Firstname = "Jan",
//                        Lastname = "Kwiatkowski",
//                        Username = "kwiatkowski@workspace.com",
//                        Email = "kwiatkowski@workspace.com",
//                    },
//                    new User
//                    {
//                        ID = "3",
//                        Firstname = "Anna",
//                        Lastname = "Miła",
//                        Username = "mila@workspace.com",
//                        Email = "mila@workspace.com",
//                    }
//               };
//            }
//        }
//    }
//}