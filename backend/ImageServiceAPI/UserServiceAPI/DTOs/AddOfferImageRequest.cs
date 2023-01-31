namespace ImageServiceAPI.DTOs
{
    public class AddOfferImageRequest
    {
        public int OfferId { get; set; }
        public IFormFile? OfferImage { get; set; }
    }
}
