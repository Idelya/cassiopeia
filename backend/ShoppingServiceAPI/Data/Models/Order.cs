namespace Data.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime PurchaseDate { get; set; }
        public double? TotalCost { get; set; }

        public ICollection<Purchase> Purchases { get; set; }

        public int? AddressId { get; set; }
        public virtual Address Address { get; set; }
    }
}
