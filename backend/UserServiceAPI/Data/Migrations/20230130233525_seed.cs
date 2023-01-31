using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "ID", "Ban", "BanReason", "Email", "Firstname", "Lastname", "Username" },
                values: new object[,]
                {
                    { "1", false, null, "admin@workspace.com", "Admin", "Admin", "admin@workspace.com" },
                    { "2", false, null, "kwiatkowski@workspace.com", "Jan", "Kwiatkowski", "kwiatkowski@workspace.com" },
                    { "3", false, null, "mila@workspace.com", "Anna", "Miła", "mila@workspace.com" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "2");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "3");
        }
    }
}
