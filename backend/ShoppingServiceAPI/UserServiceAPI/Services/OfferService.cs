using AutoMapper;
using Data.Models;
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

        public async Task<bool> AddOffer(CreateOfferRequest request, string userId)
        {
            var offer = _mapper.Map<Offer>(request);
            offer.SellerID = userId; 

            Context.Add(offer);
            if (await Context.SaveChangesAsync() == 0)
                return false;
            var deliveryTypes = Context.Delivery.ToList();

            IList<Delivery> deliveries = new List<Delivery>();
            offer.DeliveryTypes = new List<Delivery>();
            foreach (var item in request.DeliveryIds)
            {
                var delivery = deliveryTypes.FirstOrDefault(x => x.ID == item);
                offer.DeliveryTypes.Add(delivery);
            }
            if (await Context.SaveChangesAsync() == 0)
                return false;
            return true;
        }

        public async Task<bool> DeleteOffer(int id)
        {
            var offer = Context.Offer.Where(x => x.ID == id).Include(x => x.DeliveryTypes).FirstOrDefault();
            if (offer == null)
                return false;

            var deliveries = offer.DeliveryTypes.ToList();
            if (deliveries.Count > 0)
            {
                foreach (var delivery in deliveries)
                {
                    offer.DeliveryTypes.Remove(delivery);
                }
                if (await Context.SaveChangesAsync() == 0)
                    return false;
            }
            Context.Offer.Attach(offer);
            Context.Offer.Remove(offer);
            if (await Context.SaveChangesAsync() == 0)
                return false;
            return true;
        }

        public async Task<bool> EditOffers(OfferEditRequest request)
        {
            var offer = Context.Offer.Where(x => x.ID == request.Id).Include(x => x.DeliveryTypes).FirstOrDefault();
            if (offer == null)
                return false;

            if (request.Price != null)
                offer.Price = (double)request.Price;

            if (request.Description != null)
                offer.Description = request.Description;

            if (request.Name != null)
                offer.Name = request.Name;

            if (request.DeliveryIds != null)
            {
                var oldDelivery = offer.DeliveryTypes.ToList();

                foreach (var delivery in oldDelivery)
                {
                    offer.DeliveryTypes.Remove(delivery);
                }

                if (await Context.SaveChangesAsync() == 0)
                    return false;

                var newDeliveries = Context.Delivery.Where(x => request.DeliveryIds.Contains(x.ID)).ToList();
                foreach (var delivery in newDeliveries)
                {
                    offer.DeliveryTypes.Add(delivery);
                }
                if (await Context.SaveChangesAsync() == 0)
                    return false;
            }

            Context.Offer.Update(offer);

            if (await Context.SaveChangesAsync() == 0)
                return false;
            return true;
        }

        public IEnumerable<DeliveryResponse> GetDeliveries()
        {
            return Context.Delivery.Select(x => _mapper.Map<DeliveryResponse>(x)).ToList();
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
