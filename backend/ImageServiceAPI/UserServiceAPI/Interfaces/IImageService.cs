using Data.Models;
using ImageServiceAPI.DTOs;

namespace ImageServiceAPI.Interfaces
{
    public interface IImageService
    {
        ImageDataDto GetImageDataDto(string name);
        Task<bool> AddOfferImage(AddOfferImageRequest request);
        IEnumerable<ImageDto> GetImageInfosByOfferId(int offerId);

        Task<bool> EditImages(EditOfferImageRequest request);

        Task<bool> DeleteImage(DeleteImageRequest request);
    }
}
