namespace Data.Models
{
    public class Delivery
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public ICollection<Offer> Offers { get; set; }

        public virtual ICollection<Purchase> Purchases { get; set; }
    }
}
