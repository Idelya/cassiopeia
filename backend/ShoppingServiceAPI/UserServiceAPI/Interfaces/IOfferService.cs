using ShoppingServiceAPI.DTOs;

namespace ShoppingServiceAPI.Interfaces
{
    public interface IOfferService
    {
        IEnumerable<OfferResponse> GetOffers();
        IEnumerable<OfferResponse> GetOffersPublishByUser(string id);
        OfferResponse GetOffer(int id);
        Task<bool> EditOffers(OfferEditRequest offer);
        Task<bool> DeleteOffer(int id);
        Task<bool> AddOffer(CreateOfferRequest request, string userId);
        IEnumerable<DeliveryResponse> GetDeliveries();
    }
}
