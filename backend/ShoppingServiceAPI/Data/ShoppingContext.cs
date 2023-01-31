using Data.Models;
using Data.Seeds;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class ShoppingContext : DbContext
    {
        public DbSet<Purchase> Purchase { get; set; }
        public DbSet<Offer> Offer { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Delivery> Delivery { get; set; }

        public ShoppingContext(DbContextOptions<ShoppingContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

         
            //DeliveryOffer
            modelBuilder.Seed();
        }
    }
}
