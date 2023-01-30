namespace Data.Models
{
    public class Offer
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int DisplayAmount { get; set; }
        public string SellerID { get; set; }

        public ICollection<Delivery> DeliveryTypes { get; set; }
        
        public virtual Purchase Purchase { get; set; }
    }
}