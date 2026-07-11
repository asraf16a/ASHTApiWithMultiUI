using ASHT.Domain.Entities.Hrm;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class RoleConfig : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            //builder.ToTable("Roles");
            builder.HasKey(x => x.Id);

            //builder.Property(x => x.Id).UsePropertyAccessMode();

            builder.Property(n => n.RoleName).HasMaxLength(250).IsRequired();
            builder.Property(n => n.Description);
            builder.Property(n => n.IsActive).IsRequired();
            builder.Property(n => n.IsDeleted).IsRequired();
            builder.Property(n => n.CreatedDate).IsRequired();
        }
    }
}
