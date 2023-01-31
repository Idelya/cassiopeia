using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ImageServiceAPI.DTOs;
using ImageServiceAPI.Interfaces;
using Data.Models;
using System.Collections;

namespace ImageServiceAPI.Services
{
    public class ImageService : Service, IImageService
    {
        private readonly IMapper _mapper;

        public ImageService(IServiceProvider serviceProvider, IMapper mapper) : base(serviceProvider)
        {
            _mapper = mapper;
        }

        public async Task<bool> AddOfferImage(AddOfferImageRequest request)
        {
            if (request.OfferImage == null)
                return false;

            string extension = Path.GetExtension(request.OfferImage.FileName);

            var imageData = new ImageData();
            imageData.Name = Path.GetRandomFileName() + extension;
            imageData.Image = FileOperator.ExtractFileContent(request.OfferImage);
            imageData.ContentType = request.OfferImage.ContentType;

            var imageInfo = new ImageInfo();
            imageInfo.OfferId = request.OfferId;
            imageInfo.IsMain = false;
            imageInfo.ImageData = imageData;

            Context.ImageData.Add(imageData);
            Context.ImageInfo.Add(imageInfo);

            if (await Context.SaveChangesAsync() == 0)
                return false;

            return true;
        }


        public ImageDataDto GetImageDataDto(string name)
        {
            var imageData = Context.ImageData.FirstOrDefault(x => x.Name == name);

            ImageDataDto imageDataDto = new ImageDataDto();
            
            imageDataDto.Bytes = imageData.Image;
            imageDataDto.ContentType = imageData.ContentType;


            return imageDataDto;
        }

        public IEnumerable<ImageDto> GetImageInfosByOfferId(int offerId)
        {
            return Context.ImageInfo.Where(x => x.OfferId == offerId).Select(x => new ImageDto(x.Id, x.IsMain, x.ImageData.Name));
        }

        public async Task<bool> EditImages(IEnumerable<ImageDto> images)
        {
            //TODO
            var isMainCount = images.Count(x => x.IsMain);
            if (isMainCount > 1)
                return false;

            foreach (ImageDto data in images)
            {
                var dataInDb = Context.ImageData.FirstOrDefault(x => x.Id == data.Id && x.Name == data.Name);
            }

            return true;
        }
    }
}
