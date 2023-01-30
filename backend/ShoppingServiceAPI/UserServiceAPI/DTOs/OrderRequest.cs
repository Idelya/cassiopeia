using Data.Models;

namespace ShoppingServiceAPI.DTOs
{
    public class OrderRequest
    {
        public AddressRequest Address { get; set; }
        public IEnumerable<PurchaseRequest> Purchases { get; set; }
    }
}
