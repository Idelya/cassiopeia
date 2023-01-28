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

        public Task<bool> SubmitOrder(OrderRequest request)
        {
            //    var order = new Order()
            //    {
            //        PurchaseDate = 
            //    }
            throw new NotImplementedException();
        }
    }
}
