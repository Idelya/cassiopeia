using Data.Models;

namespace ShoppingServiceAPI.DTOs
{
    public class OrderRequest
    {
        public AddressRequest Address { get; set; }
        public int DeliveryId { get; set; }
        public IEnumerable<int> Purchase { get; set; }
    }
}
