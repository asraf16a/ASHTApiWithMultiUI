using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASHT.Persistent.Migrations
{
    /// <inheritdoc />
    public partial class schemaChangedmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "SubCategory",
                schema: "hrm",
                newName: "SubCategory",
                newSchema: "inventory");

            migrationBuilder.RenameTable(
                name: "Category",
                schema: "hrm",
                newName: "Category",
                newSchema: "inventory");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "SubCategory",
                schema: "inventory",
                newName: "SubCategory",
                newSchema: "hrm");

            migrationBuilder.RenameTable(
                name: "Category",
                schema: "inventory",
                newName: "Category",
                newSchema: "hrm");
        }
    }
}
