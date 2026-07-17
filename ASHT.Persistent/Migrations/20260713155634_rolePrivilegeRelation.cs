using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASHT.Persistent.Migrations
{
    /// <inheritdoc />
    public partial class rolePrivilegeRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RolePrivileges_Roles_RoleId",
                schema: "hrm",
                table: "RolePrivileges");

            migrationBuilder.AddForeignKey(
                name: "FK_RolePrivilege_Roles",
                schema: "hrm",
                table: "RolePrivileges",
                column: "RoleId",
                principalSchema: "hrm",
                principalTable: "Roles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RolePrivilege_Roles",
                schema: "hrm",
                table: "RolePrivileges");

            migrationBuilder.AddForeignKey(
                name: "FK_RolePrivileges_Roles_RoleId",
                schema: "hrm",
                table: "RolePrivileges",
                column: "RoleId",
                principalSchema: "hrm",
                principalTable: "Roles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
