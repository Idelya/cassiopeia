using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Seeds
{
    public static class ObjectSeed
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Delivery>()
                .HasData(
                    new Delivery()
                    {
                        ID = 1,
                        Name = "Paczkomat InPost",
                        Price = 10.5,
                    },
                    new Delivery()
                    {
                        ID = 2,
                        Name = "Kurier DHL",
                        Price = 15.5,
                    },
                    new Delivery()
                    {
                        ID = 3,
                        Name = "Kurier UDP",
                        Price = 17.5,
                    },
                    new Delivery()
                    {
                        ID = 4,
                        Name = "Kurier PEQ",
                        Price = 19,
                    },
                    new Delivery()
                    {
                        ID = 5,
                        Name = "Kurier LA",
                        Price = 18.7,
                    });


            modelBuilder.Entity<Offer>()
                .HasData(
                new Offer()
                {
                    ID = 1,
                    Name = "Książka",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 46,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 2,
                    Name = "Telefon",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 4326,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 3,
                    Name = "Rower",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 640,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 4,
                    Name = "Lampa",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 90,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 5,
                    Name = "Koc",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 140,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 6,
                    Name = "Widokówka",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 10,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 7,
                    Name = "Pudełko",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 12,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 8,
                    Name = "Komputer",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 4600,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 9,
                    Name = "Słuchawki",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 240,
                    SellerID = "2",
                },
                  new Offer()
                  {
                      ID = 10,
                      Name = "Kubek",
                      Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                      Price = 12,
                      SellerID = "2",
                  },
                    new Offer()
                    {
                        ID = 11,
                        Name = "Poduszka",
                        Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        Price = 132,
                        SellerID = "2",
                    },
                new Offer()
                {
                    ID = 12,
                    Name = "Obraz",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 64,
                    SellerID = "2",
                },
                new Offer()
                {
                    ID = 13,
                    Name = "Kwiatek",
                    Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                    Price = 260,
                    SellerID = "2",
                },
                  new Offer()
                  {
                      ID = 14,
                      Name = "Pluszak",
                      Description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                      Price = 60,
                      SellerID = "2",
                  }
             );

            modelBuilder
            .Entity<Offer>()
            .HasMany(p => p.DeliveryTypes)
            .WithMany(p => p.Offers)
            .UsingEntity(j => j.HasData(
                new { DeliveryTypesID = 1, OffersID = 1 },
                new { DeliveryTypesID = 2, OffersID = 1 },
                new { DeliveryTypesID = 3, OffersID = 1 },
                new { DeliveryTypesID = 1, OffersID = 2 },
                new { DeliveryTypesID = 2, OffersID = 2 },
                new { DeliveryTypesID = 3, OffersID = 2 },
                new { DeliveryTypesID = 4, OffersID = 2 },
                new { DeliveryTypesID = 1, OffersID = 3 },
                new { DeliveryTypesID = 2, OffersID = 3 },
                new { DeliveryTypesID = 1, OffersID = 4 },
                new { DeliveryTypesID = 4, OffersID = 4 },
                new { DeliveryTypesID = 4, OffersID = 5 },
                new { DeliveryTypesID = 2, OffersID = 6 },
                new { DeliveryTypesID = 3, OffersID = 6 },
                new { DeliveryTypesID = 4, OffersID = 6 },
                new { DeliveryTypesID = 1, OffersID = 7 },
                new { DeliveryTypesID = 2, OffersID = 7 },
                new { DeliveryTypesID = 4, OffersID = 7 }, 
                new { DeliveryTypesID = 3, OffersID = 8 }, 
                new { DeliveryTypesID = 4, OffersID = 8 },
                new { DeliveryTypesID = 1, OffersID = 9 },
                new { DeliveryTypesID = 2, OffersID = 9 },
                new { DeliveryTypesID = 3, OffersID = 9 },
                new { DeliveryTypesID = 4, OffersID = 9 },
                new { DeliveryTypesID = 1, OffersID = 10 },
                new { DeliveryTypesID = 3, OffersID = 10 }, 
                new { DeliveryTypesID = 4, OffersID = 10 },
                new { DeliveryTypesID = 2, OffersID = 11 },
                new { DeliveryTypesID = 3, OffersID = 11 },
                new { DeliveryTypesID = 4, OffersID = 12 },
                new { DeliveryTypesID = 1, OffersID = 13 },
                new { DeliveryTypesID = 3, OffersID = 13 },
                new { DeliveryTypesID = 4, OffersID = 13 },
                new { DeliveryTypesID = 2, OffersID = 14 },
                new { DeliveryTypesID = 3, OffersID = 14 },
                new { DeliveryTypesID = 4, OffersID = 14 }
              
                ));

        }
    }
}
