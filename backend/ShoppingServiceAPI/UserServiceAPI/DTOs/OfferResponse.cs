using System.Collections.Generic;

namespace ShoppingServiceAPI.DTOs
{
    public class OfferResponse
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int DisplayAmount { get; set; }
        public string SellerID { get; set; }
        public IEnumerable<DeliveryResponse> DeliveryTypes { get; set; }
    }
}
