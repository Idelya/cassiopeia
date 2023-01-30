using ShoppingServiceAPI.DTOs;

namespace ShoppingServiceAPI.Interfaces
{
    public interface IOrderService
    {
        Task<bool> SubmitOrder(OrderRequest request);
    }
}