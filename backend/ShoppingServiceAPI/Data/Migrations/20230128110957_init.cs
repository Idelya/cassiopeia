using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Data.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Delivery",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Koszt = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Delivery", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Offer",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    DisplayAmount = table.Column<int>(type: "integer", nullable: false),
                    SellerID = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Offer", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "DeliveryOffer",
                columns: table => new
                {
                    DeliveryTypesID = table.Column<int>(type: "integer", nullable: false),
                    OffersWithDeliveryPossibilityID = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeliveryOffer", x => new { x.DeliveryTypesID, x.OffersWithDeliveryPossibilityID });
                    table.ForeignKey(
                        name: "FK_DeliveryOffer_Delivery_DeliveryTypesID",
                        column: x => x.DeliveryTypesID,
                        principalTable: "Delivery",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DeliveryOffer_Offer_OffersWithDeliveryPossibilityID",
                        column: x => x.OffersWithDeliveryPossibilityID,
                        principalTable: "Offer",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Purchase",
                columns: table => new
                {
                    ID = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    TotalCost = table.Column<double>(type: "double precision", nullable: false),
                    OfferID = table.Column<int>(type: "integer", nullable: false),
                    DeliveryId = table.Column<int>(type: "integer", nullable: false),
                    BuyerID = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Purchase", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Purchase_Delivery_DeliveryId",
                        column: x => x.DeliveryId,
                        principalTable: "Delivery",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Purchase_Offer_OfferID",
                        column: x => x.OfferID,
                        principalTable: "Offer",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DeliveryOffer_OffersWithDeliveryPossibilityID",
                table: "DeliveryOffer",
                column: "OffersWithDeliveryPossibilityID");

            migrationBuilder.CreateIndex(
                name: "IX_Purchase_DeliveryId",
                table: "Purchase",
                column: "DeliveryId");

            migrationBuilder.CreateIndex(
                name: "IX_Purchase_OfferID",
                table: "Purchase",
                column: "OfferID",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DeliveryOffer");

            migrationBuilder.DropTable(
                name: "Purchase");

            migrationBuilder.DropTable(
                name: "Delivery");

            migrationBuilder.DropTable(
                name: "Offer");
        }
    }
}
