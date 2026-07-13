using ASHT.Domain.Entities.Medical;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class PrescriptionDetailConfig : IEntityTypeConfiguration<PrescriptionDetail>
    {
        public void Configure(EntityTypeBuilder<PrescriptionDetail> builder)
        {
            builder.ToTable("PrescriptionDetails", "medical");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.MedicineName).HasMaxLength(200).IsRequired();
            builder.Property(r => r.Dosage);
            builder.Property(r => r.StartDate);
            builder.Property(r => r.EndDate);
            builder.Property(r => r.Notes).HasMaxLength(900);

        }
    }
}
