namespace ShoppingServiceAPI.DTOs
{
    public class CreateOfferRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public IEnumerable<int> DeliveryIds { get; set; }
    }
}
