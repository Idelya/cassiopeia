using Data.Enums;

namespace Data.Models
{
    public class Purchase
    {
        public int ID { get; set; }
        public PurchaseStatus Status { get; set; }
        public double TotalCost { get; set; }

        public int OfferID { get; set; }
        public virtual Offer Offer { get; set; }

        public int DeliveryId { get; set; }
        public Delivery Delivery { get; set; }  

        public int BuyerID { get; set; }
    }
}
