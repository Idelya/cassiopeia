using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "PurchaseDate",
                table: "Order",
                type: "timestamp without time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.InsertData(
                table: "Delivery",
                columns: new[] { "ID", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Paczkomat InPost", 10.5 },
                    { 2, "Kurier DHL", 15.5 },
                    { 3, "Kurier UDP", 17.5 },
                    { 4, "Kurier PEQ", 19.0 },
                    { 5, "Kurier LA", 18.699999999999999 }
                });

            migrationBuilder.InsertData(
                table: "Offer",
                columns: new[] { "ID", "Description", "DisplayAmount", "Name", "Price", "SellerID" },
                values: new object[,]
                {
                    { 1, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Książka", 46.0, "2" },
                    { 2, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Telefon", 4326.0, "2" },
                    { 3, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Rower", 640.0, "2" },
                    { 4, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Lampa", 90.0, "2" },
                    { 5, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Koc", 140.0, "2" },
                    { 6, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Widokówka", 10.0, "2" },
                    { 7, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Pudełko", 12.0, "2" },
                    { 8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Komputer", 4600.0, "2" },
                    { 9, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Słuchawki", 240.0, "2" },
                    { 10, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Kubek", 12.0, "2" },
                    { 11, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Poduszka", 132.0, "2" },
                    { 12, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Obraz", 64.0, "2" },
                    { 13, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Kwiatek", 260.0, "2" },
                    { 14, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 0, "Pluszak", 60.0, "2" }
                });

            migrationBuilder.InsertData(
                table: "DeliveryOffer",
                columns: new[] { "DeliveryTypesID", "OffersID" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 1, 2 },
                    { 1, 3 },
                    { 1, 4 },
                    { 1, 7 },
                    { 1, 9 },
                    { 1, 10 },
                    { 1, 13 },
                    { 2, 1 },
                    { 2, 2 },
                    { 2, 3 },
                    { 2, 6 },
                    { 2, 7 },
                    { 2, 9 },
                    { 2, 11 },
                    { 2, 14 },
                    { 3, 1 },
                    { 3, 2 },
                    { 3, 6 },
                    { 3, 8 },
                    { 3, 9 },
                    { 3, 10 },
                    { 3, 11 },
                    { 3, 13 },
                    { 3, 14 },
                    { 4, 2 },
                    { 4, 4 },
                    { 4, 5 },
                    { 4, 6 },
                    { 4, 7 },
                    { 4, 8 },
                    { 4, 9 },
                    { 4, 10 },
                    { 4, 12 },
                    { 4, 13 },
                    { 4, 14 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Delivery",
                keyColumn: "ID",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 3 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 4 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 7 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 9 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 10 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 1, 13 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 1 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 3 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 6 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 7 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 9 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 11 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 2, 14 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 1 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 2 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 6 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 8 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 9 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 10 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 11 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 13 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 3, 14 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 2 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 4 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 5 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 6 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 7 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 8 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 9 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 10 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 12 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 13 });

            migrationBuilder.DeleteData(
                table: "DeliveryOffer",
                keyColumns: new[] { "DeliveryTypesID", "OffersID" },
                keyValues: new object[] { 4, 14 });

            migrationBuilder.DeleteData(
                table: "Delivery",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Delivery",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Delivery",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Delivery",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Offer",
                keyColumn: "ID",
                keyValue: 14);

            migrationBuilder.AlterColumn<DateTime>(
                name: "PurchaseDate",
                table: "Order",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp without time zone");
        }
    }
}
