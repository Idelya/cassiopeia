using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class xs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ReasonOfBlocking",
                table: "Users",
                newName: "BanReason");

            migrationBuilder.RenameColumn(
                name: "Block",
                table: "Users",
                newName: "Ban");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BanReason",
                table: "Users",
                newName: "ReasonOfBlocking");

            migrationBuilder.RenameColumn(
                name: "Ban",
                table: "Users",
                newName: "Block");
        }
    }
}
