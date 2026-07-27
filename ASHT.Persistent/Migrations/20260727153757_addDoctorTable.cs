using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASHT.Persistent.Migrations
{
    /// <inheritdoc />
    public partial class addDoctorTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Doctors",
                schema: "medical",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Specialization = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Qualifications = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    YearsOfExperience = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LicenseNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Department = table.Column<string>(type: "nvarchar(90)", maxLength: 90, nullable: true),
                    WorkingHours = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Patients",
                schema: "medical",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Address = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    BloodType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Allergies = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MedicalHistory = table.Column<string>(type: "nvarchar(90)", maxLength: 90, nullable: true),
                    CurrentMedications = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    InsuranceProvider = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    InsuranceNumber = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryId",
                schema: "inventory",
                table: "Products",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_SubCategoryId",
                schema: "inventory",
                table: "Products",
                column: "SubCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_DoctorId",
                schema: "medical",
                table: "Appointments",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_PatientId",
                schema: "medical",
                table: "Appointments",
                column: "PatientId");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Doctors_DoctorId",
                schema: "medical",
                table: "Appointments",
                column: "DoctorId",
                principalSchema: "medical",
                principalTable: "Doctors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Patients_PatientId",
                schema: "medical",
                table: "Appointments",
                column: "PatientId",
                principalSchema: "medical",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Category_CategoryId",
                schema: "inventory",
                table: "Products",
                column: "CategoryId",
                principalSchema: "hrm",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_SubCategory_SubCategoryId",
                schema: "inventory",
                table: "Products",
                column: "SubCategoryId",
                principalSchema: "hrm",
                principalTable: "SubCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Doctors_DoctorId",
                schema: "medical",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Patients_PatientId",
                schema: "medical",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Category_CategoryId",
                schema: "inventory",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_SubCategory_SubCategoryId",
                schema: "inventory",
                table: "Products");

            migrationBuilder.DropTable(
                name: "Doctors",
                schema: "medical");

            migrationBuilder.DropTable(
                name: "Patients",
                schema: "medical");

            migrationBuilder.DropIndex(
                name: "IX_Products_CategoryId",
                schema: "inventory",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_SubCategoryId",
                schema: "inventory",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_DoctorId",
                schema: "medical",
                table: "Appointments");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_PatientId",
                schema: "medical",
                table: "Appointments");
        }
    }
}
