using ASHT.Domain.Entities.Medical;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class AppointmentConfig : IEntityTypeConfiguration<Appointment>
    {
        public void Configure(EntityTypeBuilder<Appointment> builder)
        {
            builder.ToTable("Appointments", "medical");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.VisitType).HasMaxLength(50).IsRequired();
            builder.Property(r => r.AppointmentDate);
            builder.Property(r => r.PatientId);
            builder.Property(r => r.DoctorId);
            builder.Property(r => r.Notes).HasMaxLength(500);
            builder.Property(r => r.Diagonosis).HasMaxLength(900);
        }
    }
}
