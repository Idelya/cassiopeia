namespace Data.Models
{
    public class ImageData
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? ContentType { get; set; }
        public byte[]? Image { get; set; }
    }
}
