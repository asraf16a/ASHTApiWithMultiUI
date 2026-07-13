using ASHT.Domain.Entities.Hrm;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class RolePrivilegeConfig : IEntityTypeConfiguration<RolePrivilege>
    {
        public void Configure(EntityTypeBuilder<RolePrivilege> builder)
        {
            builder.ToTable("RolePrivileges", "hrm");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.RolePrivilegeName).HasMaxLength(100).IsRequired();
            builder.Property(r => r.Description).HasMaxLength(300);
            builder.Property(r => r.RoleId);
            builder.Property(r => r.IsActive).HasDefaultValue(true).IsRequired();
            builder.Property(r => r.IsDeleted).HasDefaultValue(false).IsRequired();
            builder.Property(r => r.CreatedDate).IsRequired();
            builder.Property(r => r.ModifiedDate).IsRequired();
            builder.HasOne(r => r.Role)
                .WithMany(r => r.RolePrivileges)
                .HasForeignKey(r => r.RoleId)
                .HasConstraintName("FK_RolePrivilege_Roles");
        }
    }
}
