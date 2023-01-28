using ShoppingServiceAPI.DTOs;

namespace ShoppingServiceAPI.Interfaces
{
    public interface IOfferService
    {
        IEnumerable<OfferResponse> GetOffers();
        IEnumerable<OfferResponse> GetOffersPublishByUser(string id);
        OfferResponse GetOffer(int id);
        OfferResponse EditOffers(OfferEditRequest offer);
    }
}
