using ASHT.Domain.Entities.Hrm;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class RoleConfig : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("Roles", "hrm");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.RoleName).HasMaxLength(250).IsRequired();
            builder.Property(r => r.Description).HasMaxLength(500);
            builder.Property(r => r.IsActive).HasDefaultValue(true).IsRequired();
            builder.Property(r => r.IsDeleted).HasDefaultValue(false).IsRequired();
            builder.Property(r => r.CreatedDate).IsRequired();
            builder.HasIndex(r => r.RoleName).IsUnique();
        }
    }
}
