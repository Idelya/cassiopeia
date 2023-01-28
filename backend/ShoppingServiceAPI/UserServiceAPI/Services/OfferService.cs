using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ShoppingServiceAPI.DTOs;
using ShoppingServiceAPI.Interfaces;

namespace ShoppingServiceAPI.Services
{
    public class OfferService : Service, IOfferService
    {
        private readonly IMapper _mapper;

        public OfferService(IServiceProvider serviceProvider, IMapper mapper) : base(serviceProvider)
        {
            _mapper = mapper;
        }

        public async Task<bool> EditOffers(OfferEditRequest request)
        {
            var offer = Context.Offer.FirstOrDefault(x => x.ID == request.Id);
            if (offer == null)
                return false;

            if (request.Price != null)
                offer.Price = (double)request.Price;

            if (request.Description != null)
                offer.Description = request.Description;

            if (request.Name != null)
                offer.Name = request.Name;

            Context.Offer.Update(offer);

            if (await Context.SaveChangesAsync() == 0)
                return false;
            return true;
        }

        public OfferResponse GetOffer(int id)
        {
            return _mapper.Map<OfferResponse>(Context.Offer.Where(x => x.ID == id).Include(x => x.DeliveryTypes).FirstOrDefault());
        }

        public IEnumerable<OfferResponse> GetOffers()
        {
            return Context.Offer
                 .Include(x => x.DeliveryTypes)
                .Select(x => _mapper.Map<OfferResponse>(x))
                .ToList();
        }

        public IEnumerable<OfferResponse> GetOffersPublishByUser(string id)
        {
            return Context.Offer
                .Where(x => x.SellerID == id)
                .Include(x => x.DeliveryTypes)
                .Select(x => _mapper.Map<OfferResponse>(x))
                .ToList();
        }
    }
}
