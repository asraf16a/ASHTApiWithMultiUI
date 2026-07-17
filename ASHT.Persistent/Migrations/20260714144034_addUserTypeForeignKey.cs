using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASHT.Persistent.Migrations
{
    /// <inheritdoc />
    public partial class addUserTypeForeignKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UserTypes_UserTypeId",
                schema: "hrm",
                table: "Users");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UserTypes",
                schema: "hrm",
                table: "Users",
                column: "UserTypeId",
                principalSchema: "hrm",
                principalTable: "UserTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UserTypes",
                schema: "hrm",
                table: "Users");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UserTypes_UserTypeId",
                schema: "hrm",
                table: "Users",
                column: "UserTypeId",
                principalSchema: "hrm",
                principalTable: "UserTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
