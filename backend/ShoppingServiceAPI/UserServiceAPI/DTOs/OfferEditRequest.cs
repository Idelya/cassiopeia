namespace ShoppingServiceAPI.DTOs
{
    public class OfferEditRequest
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public double? Price { get; set; }
        public IEnumerable<int>? DeliveryIds { get; set;  }
    }
}
