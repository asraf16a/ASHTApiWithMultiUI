using ASHT.Domain.Entities.Hrm;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class UserRoleMappingConfig : IEntityTypeConfiguration<UserRoleMapping>
    {
        public void Configure(EntityTypeBuilder<UserRoleMapping> builder)
        {
            builder.ToTable("UserRoleMappings", "hrm");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.UserId);
            builder.Property(r => r.RoleId);

        }
    }
}
