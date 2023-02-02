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
            imageData.OfferId = request.OfferId;
            imageData.IsMain = false;

            Context.ImageData.Add(imageData);

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
            return Context.ImageData.Where(x => x.OfferId == offerId).Select(x => new ImageDto
            {
                Id = x.Id,
                IsMain = x.IsMain,
                Name = x.Name
            }); ;
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



            var imageInfosFromDb = Context.ImageData.Where(x => x.OfferId == request.OfferId).ToArray();
            var imageInfosToDelete = new LinkedList<ImageData>();

            foreach (ImageData imageData in imageInfosFromDb)
            {
                bool isFound = false;
                bool isMain = false;
                foreach (var image in images)
                {
                    if (imageData.Id == image.Id && imageData.Name == image.Name)
                    {
                        isFound = true;
                        isMain = image.IsMain;
                    }
                        
                }

                if (isFound)
                {
                    imageData.IsMain = isMain;
                    Context.Update(imageData);
                    Context.SaveChanges();
                }
                else
                {
                    imageInfosToDelete.AddLast(imageData);
                }
            }

            foreach(ImageData toDelete in imageInfosToDelete)
            {
                Context.ImageData.Remove(toDelete);
                Context.SaveChanges();
            }

            return true;
        }

        public async Task<bool> DeleteImage(DeleteImageRequest request)
        {
            var toDelete = Context.ImageData.Where(x => x.Id == request.ImageId && x.OfferId == request.OfferId).FirstOrDefault();
            if (toDelete == null)
            {
                return false;
            }
            else
            {
                Context.ImageData.Remove(toDelete);
                Context.SaveChanges();
                return true;
            }
            
        }

    }
}
