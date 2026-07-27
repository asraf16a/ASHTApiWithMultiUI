using ASHT.Domain.Entities.Medical;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class DoctorConfig : IEntityTypeConfiguration<Doctor>
    {
        public void Configure(EntityTypeBuilder<Doctor> builder)
        {
            builder.ToTable("Doctors", "medical");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.Name).HasMaxLength(50);
            builder.Property(r => r.Email).HasMaxLength(100);
            builder.Property(r => r.Specialization).HasMaxLength(200);
            builder.Property(r => r.Qualifications).HasMaxLength(100);
            builder.Property(r => r.Gender).HasMaxLength(50);
            builder.Property(r => r.DateOfBirth);

            builder.Property(r => r.YearsOfExperience).HasMaxLength(50);
            builder.Property(r => r.LicenseNumber).HasMaxLength(50);
            builder.Property(r => r.Department).HasMaxLength(90);
            builder.Property(r => r.WorkingHours).HasMaxLength(50);
            builder.Property(r => r.Status);

        }
    }
}
