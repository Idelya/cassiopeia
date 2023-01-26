using Microsoft.AspNetCore.Identity;

namespace Data.Models
{
    public class User
    {
        public string ID { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public bool Block { get; set; }
        public string? ReasonOfBlocking { get; set; }
        public string  Username { get; set; }
    }
}
