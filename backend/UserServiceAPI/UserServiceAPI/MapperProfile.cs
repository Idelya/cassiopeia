using AutoMapper;
using Data.Models;
using UserServiceAPI.DTOs;

namespace UserServiceAPI
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<User, UserResponse>()
                .ForMember(e => e.Fullname, opt => opt.MapFrom(v => $"{v.Firstname} {v.Lastname}"))
                .ReverseMap();
        }
    }
}