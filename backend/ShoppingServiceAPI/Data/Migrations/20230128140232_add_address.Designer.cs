﻿// <auto-generated />
using System;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Data.Migrations
{
    [DbContext(typeof(ShoppingContext))]
    [Migration("20230128140232_add_address")]
    partial class add_address
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Data.Models.Address", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("StreetNumber")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("Data.Models.Delivery", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<double>("Koszt")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Delivery");
                });

            modelBuilder.Entity("Data.Models.Offer", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("DisplayAmount")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<string>("SellerID")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Offer");
                });

            modelBuilder.Entity("Data.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("AddressId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("PurchaseDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<double>("TotalCost")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.HasIndex("AddressId")
                        .IsUnique();

                    b.ToTable("Order");
                });

            modelBuilder.Entity("Data.Models.Purchase", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("ID"));

                    b.Property<int>("BuyerID")
                        .HasColumnType("integer");

                    b.Property<int>("DeliveryId")
                        .HasColumnType("integer");

                    b.Property<int>("OfferID")
                        .HasColumnType("integer");

                    b.Property<int>("OrderID")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<double>("TotalCost")
                        .HasColumnType("double precision");

                    b.HasKey("ID");

                    b.HasIndex("DeliveryId");

                    b.HasIndex("OfferID")
                        .IsUnique();

                    b.HasIndex("OrderID");

                    b.ToTable("Purchase");
                });

            modelBuilder.Entity("DeliveryOffer", b =>
                {
                    b.Property<int>("DeliveryTypesID")
                        .HasColumnType("integer");

                    b.Property<int>("OffersWithDeliveryPossibilityID")
                        .HasColumnType("integer");

                    b.HasKey("DeliveryTypesID", "OffersWithDeliveryPossibilityID");

                    b.HasIndex("OffersWithDeliveryPossibilityID");

                    b.ToTable("DeliveryOffer");
                });

            modelBuilder.Entity("Data.Models.Order", b =>
                {
                    b.HasOne("Data.Models.Address", "Address")
                        .WithOne("Order")
                        .HasForeignKey("Data.Models.Order", "AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");
                });

            modelBuilder.Entity("Data.Models.Purchase", b =>
                {
                    b.HasOne("Data.Models.Delivery", "Delivery")
                        .WithMany("Purchases")
                        .HasForeignKey("DeliveryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Data.Models.Offer", "Offer")
                        .WithOne("Purchase")
                        .HasForeignKey("Data.Models.Purchase", "OfferID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Data.Models.Order", "Order")
                        .WithMany("Purchases")
                        .HasForeignKey("OrderID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Delivery");

                    b.Navigation("Offer");

                    b.Navigation("Order");
                });

            modelBuilder.Entity("DeliveryOffer", b =>
                {
                    b.HasOne("Data.Models.Delivery", null)
                        .WithMany()
                        .HasForeignKey("DeliveryTypesID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Data.Models.Offer", null)
                        .WithMany()
                        .HasForeignKey("OffersWithDeliveryPossibilityID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Data.Models.Address", b =>
                {
                    b.Navigation("Order")
                        .IsRequired();
                });

            modelBuilder.Entity("Data.Models.Delivery", b =>
                {
                    b.Navigation("Purchases");
                });

            modelBuilder.Entity("Data.Models.Offer", b =>
                {
                    b.Navigation("Purchase")
                        .IsRequired();
                });

            modelBuilder.Entity("Data.Models.Order", b =>
                {
                    b.Navigation("Purchases");
                });
#pragma warning restore 612, 618
        }
    }
}
