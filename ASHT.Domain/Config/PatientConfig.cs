using ASHT.Domain.Entities.Medical;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class PatientConfig : IEntityTypeConfiguration<Patient>
    {
        public void Configure(EntityTypeBuilder<Patient> builder)
        {
            builder.ToTable("Patients", "medical");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.FirstName).HasMaxLength(50);
            builder.Property(r => r.LastName).HasMaxLength(50);
            builder.Property(r => r.DateOfBirth);
            builder.Property(r => r.Gender).HasMaxLength(50);
            builder.Property(r => r.PhoneNumber).HasMaxLength(30);
            builder.Property(r => r.Email).HasMaxLength(50);
            builder.Property(r => r.Address).HasMaxLength(200);

            builder.Property(r => r.BloodType).HasMaxLength(50);
            builder.Property(r => r.Allergies).HasMaxLength(50);
            builder.Property(r => r.MedicalHistory).HasMaxLength(90);
            builder.Property(r => r.CurrentMedications).HasMaxLength(50);
            builder.Property(r => r.InsuranceProvider).HasMaxLength(50);
            builder.Property(r => r.InsuranceNumber).HasMaxLength(30);
            builder.Property(r => r.CreatedDate);
            builder.Property(r => r.CreatedBy);
            builder.Property(r => r.IsActive);
        }
    }
}
