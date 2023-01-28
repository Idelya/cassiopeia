using ShoppingServiceAPI.DTOs;
using ShoppingServiceAPI.Interfaces;

namespace ShoppingServiceAPI.Services
{
    public class OfferService : Service, IOfferService
    {
        public OfferService(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }

        public OfferResponse EditOffers(OfferEditRequest request)
        {
            //var offer = Context.Offer.FirstOrDefault(x => x.ID == request.Id).Offer;
            return null;
        }

        public OfferResponse GetOffer(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<OfferResponse> GetOffers()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<OfferResponse> GetOffersPublishByUser(string id)
        {
            throw new NotImplementedException();
        }
    }
}
