using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class ImageContext : DbContext
    {
        public DbSet<ImageInfo> ImageInfo { get; set; }
        public DbSet<ImageData> ImageData { get; set; }

        public ImageContext(DbContextOptions<ImageContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
