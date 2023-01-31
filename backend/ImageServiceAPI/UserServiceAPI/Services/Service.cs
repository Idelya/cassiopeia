using Data;
using Data.Models;
using Microsoft.AspNetCore.Identity;

namespace ImageServiceAPI.Services
{
    public class Service
    {
        public ImageContext Context { get; }

        public Service(IServiceProvider serviceProvider)
        {
            Context = serviceProvider.GetService<ImageContext>();
        }
    }
}