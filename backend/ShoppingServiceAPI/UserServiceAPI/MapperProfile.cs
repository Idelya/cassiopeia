using AutoMapper;
using ShoppingServiceAPI.DTOs;

namespace ShoppingServiceAPI
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            //CreateMap<User, UserResponse>()
            //    .ForMember(e => e.Fullname, opt => opt.MapFrom(v => $"{v.Firstname} {v.Lastname}"))
            //    .ReverseMap();
        }
    }
}