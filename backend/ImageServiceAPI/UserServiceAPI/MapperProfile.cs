using AutoMapper;
using Data.Models;
using ImageServiceAPI.DTOs;

namespace ImageServiceAPI
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            //CreateMap<Offer, OfferResponse>().ReverseMap();
            //CreateMap<Delivery, GetOfferImageRequest>().ReverseMap();   
            //CreateMap<AddOfferImageRequest, OfferImage>().ReverseMap();  
        }
    }
}