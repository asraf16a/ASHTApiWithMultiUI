using ASHT.Domain.Entities.Hrm;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users", "hrm");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.Username).HasMaxLength(200).IsRequired();
            builder.Property(r => r.Password).HasMaxLength(100);
            builder.Property(r => r.PasswordSalt).HasMaxLength(100);
            builder.Property(r => r.UserTypeId);
            builder.Property(r => r.IsActive).HasDefaultValue(true).IsRequired();
            builder.Property(r => r.IsDeleted).HasDefaultValue(false).IsRequired();
            builder.Property(r => r.CreatedDate);
            builder.Property(r => r.ModifiedDate);
            builder.HasOne(r => r.UserType)
                   .WithMany(r => r.Users)
                   .HasForeignKey(r => r.UserTypeId)
                   .HasConstraintName("FK_Users_UserTypes");
        }
    }
}
