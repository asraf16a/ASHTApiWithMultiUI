using ASHT.Domain.Entities.Hrm;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class UserTypeConfig : IEntityTypeConfiguration<UserType>
    {
        public void Configure(EntityTypeBuilder<UserType> builder)
        {
            builder.ToTable("UserTypes", "hrm");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).UseIdentityColumn();

            builder.Property(n => n.Name).IsRequired().HasMaxLength(250);
            builder.Property(n => n.Description).HasMaxLength(1500);

            builder.HasData(new List<UserType>()
            {
                new UserType {
                    Id = 1,
                    Name = "Admin",
                    Description = "for System"
                },
                new UserType {
                    Id = 2,
                    Name = "Super Admin",
                    Description = "for System"
                },

                new UserType {
                    Id = 3,
                    Name = "Student",
                    Description = "for Students"
                },
                new UserType {
                    Id = 4,
                    Name = "Faculty",
                    Description = "for Faculty"
                },
                new UserType {
                    Id = 5,
                    Name = "Supporting Staff",
                    Description = "for Supporting Staff"
                },
                new UserType {
                    Id = 6,
                    Name = "Parents",
                    Description = "for Parents"
                }
            });

        }
    }
}
