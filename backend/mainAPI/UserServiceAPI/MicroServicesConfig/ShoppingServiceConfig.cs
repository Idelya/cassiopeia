namespace MainAPI.MicroServicesConfig
{
    public static class ShoppingServiceConfig
    {
        public static string SHOPPING_SERVICE_BASE_URL = "https://localhost:5002/api";
        public static string OFFER_CONTROLLER_NAME = "Offer";
        public static string GET_OFFERS = "all";
        public static string EDIT_OFFER = "edit";

        public static string ORDER_CONTROLLER_NAME = "Order";
        public static string BUY = "buy";
    }
}
