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

        public async Task<bool> EditImages(EditOfferImageRequest request)
        {
            var images = request.Images;
            if (images.Count() == 0)
            {
                return true;
            }
            var isMainCount = images.Count(x => x.IsMain);
            if (isMainCount > 1)
                return false;



            var imageInfosFromDb = Context.ImageInfo.Where(x => x.OfferId == request.OfferId).ToArray();
            var imageInfosToDelete = new LinkedList<ImageInfo>();

            foreach (ImageInfo imageInfo in imageInfosFromDb)
            {
                bool isFound = false;
                bool isMain = false;
                foreach (var image in images)
                {
                    if (imageInfo.ImageData.Id == image.Id && imageInfo.ImageData.Name == image.Name)
                    {
                        isFound = true;
                        isMain = image.IsMain;
                    }
                        
                }

                if (isFound)
                {
                    imageInfo.IsMain = isMain;
                    Context.Update(imageInfo);
                }
                else
                {
                    imageInfosToDelete.AddLast(imageInfo);
                }
            }

            foreach(ImageInfo toDelete in imageInfosToDelete)
            {
                Context.ImageData.Remove(toDelete.ImageData);
                Context.ImageInfo.Remove(toDelete);
            }

            return true;
        }
    }
}
