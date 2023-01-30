using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class d : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DeliveryOffer_Offer_OffersWithDeliveryPossibilityID",
                table: "DeliveryOffer");

            migrationBuilder.RenameColumn(
                name: "OffersWithDeliveryPossibilityID",
                table: "DeliveryOffer",
                newName: "OffersID");

            migrationBuilder.RenameIndex(
                name: "IX_DeliveryOffer_OffersWithDeliveryPossibilityID",
                table: "DeliveryOffer",
                newName: "IX_DeliveryOffer_OffersID");

            migrationBuilder.AddForeignKey(
                name: "FK_DeliveryOffer_Offer_OffersID",
                table: "DeliveryOffer",
                column: "OffersID",
                principalTable: "Offer",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DeliveryOffer_Offer_OffersID",
                table: "DeliveryOffer");

            migrationBuilder.RenameColumn(
                name: "OffersID",
                table: "DeliveryOffer",
                newName: "OffersWithDeliveryPossibilityID");

            migrationBuilder.RenameIndex(
                name: "IX_DeliveryOffer_OffersID",
                table: "DeliveryOffer",
                newName: "IX_DeliveryOffer_OffersWithDeliveryPossibilityID");

            migrationBuilder.AddForeignKey(
                name: "FK_DeliveryOffer_Offer_OffersWithDeliveryPossibilityID",
                table: "DeliveryOffer",
                column: "OffersWithDeliveryPossibilityID",
                principalTable: "Offer",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
