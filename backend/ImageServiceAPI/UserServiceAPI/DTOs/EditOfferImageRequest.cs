namespace ImageServiceAPI.DTOs
{
    public class EditOfferImageRequest
    {
        public int OfferId { get; set; }
        public ImageDto[]? Images { get; set; }

/*        public EditOfferImageRequest()
        {

        }

        public EditOfferImageRequest(int offerId, ImageDto[] images)
        {
            OfferId = offerId;
            Images = images;
        }*/
    }
}
