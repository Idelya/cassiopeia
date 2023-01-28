namespace Data.Models
{
    public class Delivery
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Koszt { get; set; }

        public virtual  ICollection<Offer> OffersWithDeliveryPossibility { get; set; }

        public virtual  ICollection<Purchase> Purchases { get; set; }
    }
}
