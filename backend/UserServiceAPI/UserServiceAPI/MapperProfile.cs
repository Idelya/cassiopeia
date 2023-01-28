using AutoMapper;
using Data.Models;
using UserServiceAPI.DTOs;

namespace UserServiceAPI
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            //Mapowanie dla controlera Step 
            CreateMap<User, UserResponse>()
                .ForMember(e => e.Fullname, opt => opt.MapFrom(v => $"{v.Firstname} {v.Lastname}"))
                .ReverseMap();
        }
    }
}