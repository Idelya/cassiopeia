using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class seed_v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "3",
                columns: new[] { "Email", "Firstname", "Lastname", "Username" },
                values: new object[] { "adam@workspace.com", "Adam", "Stary", "adam@workspace.com" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "ID", "Ban", "BanReason", "Email", "Firstname", "Lastname", "Username" },
                values: new object[,]
                {
                    { "4", false, null, "firchild@workspace.com", "Amelia", "Firchild", "firchID@workspace.com" },
                    { "5", false, null, "mila@workspace.com", "Anna", "Miła", "mila@workspace.com" },
                    { "6", false, null, "stracber@workspace.com", "Miłosz", "Stracber", "stracber@workspace.com" },
                    { "7", false, null, "buricki@workspace.com", "Krzysztof", "Buricki", "buricki@workspace.com" },
                    { "8", false, null, "sardothien@workspace.com", "Stella", "Sardothien", "sardothien@workspace.com" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "4");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "5");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "6");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "7");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "8");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "ID",
                keyValue: "3",
                columns: new[] { "Email", "Firstname", "Lastname", "Username" },
                values: new object[] { "mila@workspace.com", "Anna", "Miła", "mila@workspace.com" });
        }
    }
}
