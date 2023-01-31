namespace Data.Models
{
    public class ImageInfo
    {
        public int Id { get; set; }
        public int OfferId { get; set; }
        public bool IsMain { get; set; }
        public ImageData? ImageData { get; set; }
    }
}
