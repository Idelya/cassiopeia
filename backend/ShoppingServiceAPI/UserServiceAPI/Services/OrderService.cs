using AutoMapper;
using Data.Models;
using ShoppingServiceAPI.DTOs;
using ShoppingServiceAPI.Interfaces;

namespace ShoppingServiceAPI.Services
{
    public class OrderService : Service, IOrderService
    {
        private readonly IMapper _mapper;

        public OrderService(IServiceProvider serviceProvider, IMapper autoMapper) : base(serviceProvider)
        {
            _mapper = autoMapper;
        }

        public async Task<bool> SubmitOrder(OrderRequest request)
        {
            var deliveries = Context.Delivery.Where(x => request.Purchases.Select(c => c.DeliveryId).ToList().Contains(x.ID)).ToList();
            var offers = Context.Offer.Where(x => request.Purchases.Select(c => c.OfferId).ToList().Contains(x.ID)).ToList();

            var cost = deliveries.Sum(x => x.Price) + offers.Sum(x => x.Price);

            var address = _mapper.Map<Address>(request.Address);

            Context.Add(address);
            if (await Context.SaveChangesAsync() == 0)
                return false;

            var order = new Order()
            {
                PurchaseDate = DateTime.Now,
                TotalCost = cost,
                AddressId = address.Id
            };

            Context.Add(order);
            if (await Context.SaveChangesAsync() == 0)
                return false;

            var purchases = new List<Purchase>();
            foreach (var item in offers)
            {
                purchases.Add(new Purchase()
                {
                    TotalCost = item.Price,
                    OfferID = item.ID,
                    Status = Data.Enums.PurchaseStatus.ORDERED,
                    BuyerID = 1,
                    DeliveryId = request.Purchases.First(x => x.OfferId == item.ID).DeliveryId,
                    OrderID = order.Id
                });
            }

            await Context.AddRangeAsync(purchases);
            if (await Context.SaveChangesAsync() == 0)
                return false;
            return true;
        }
    }
}
