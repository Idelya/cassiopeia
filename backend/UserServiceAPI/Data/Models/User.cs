namespace Data.Models
{
    public class User
    {
        public string ID { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public bool Ban { get; set; }
        public string? BanReason { get; set; }
        public string  Username { get; set; }
    }
}
