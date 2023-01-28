using AutoMapper;
using Data.Models;
using ShoppingServiceAPI.DTOs;

namespace ShoppingServiceAPI
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Offer, OfferResponse>().ReverseMap();
            CreateMap<Delivery, DeliveryResponse>().ReverseMap();   
        }
    }
}