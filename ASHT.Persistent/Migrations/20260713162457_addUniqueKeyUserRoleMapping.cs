using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASHT.Persistent.Migrations
{
    /// <inheritdoc />
    public partial class addUniqueKeyUserRoleMapping : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_UserRoleMappings_UserId",
                schema: "hrm",
                table: "UserRoleMappings");

            migrationBuilder.CreateIndex(
                name: "UK_UserRoleMapping",
                schema: "hrm",
                table: "UserRoleMappings",
                columns: new[] { "UserId", "RoleId" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "UK_UserRoleMapping",
                schema: "hrm",
                table: "UserRoleMappings");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoleMappings_UserId",
                schema: "hrm",
                table: "UserRoleMappings",
                column: "UserId");
        }
    }
}
