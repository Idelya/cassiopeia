using Microsoft.AspNetCore.Identity;

namespace Data.Models
{
    public class User: IdentityUser<string>
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        //public bool Block { get; set; }
        //public string? ReasonOfBlocking { get; set; }
    }
}
