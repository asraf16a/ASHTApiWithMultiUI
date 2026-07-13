using ASHT.Domain.Config;
using ASHT.Domain.Entities.Hrm;
using ASHT.Domain.Entities.Inventory;
using ASHT.Domain.Entities.Medical;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Persistent
{
    public class ASHTDbContext : DbContext
    {
        public ASHTDbContext(DbContextOptions<ASHTDbContext> options) : base(options)
        {

        }

        public DbSet<Category> Categorys { get; set; }

        public DbSet<SubCategory> SubCategorys { get; set; }

        public DbSet<Product> Products { get; set; }

        //Medical Related table

        public DbSet<Appointment> Appointments { get; set; }

        public DbSet<PrescriptionDetail> PrescriptionDetails { get; set; }

        //User Related table
        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        public DbSet<RolePrivilege> RolePrivileges { get; set; }

        public DbSet<UserRoleMapping> UserRoleMappings { get; set; }

        public DbSet<UserType> UserTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //User Related table configuration
            builder.ApplyConfiguration(new UserConfig());
            builder.ApplyConfiguration(new RoleConfig());
            builder.ApplyConfiguration(new RolePrivilegeConfig());
            builder.ApplyConfiguration(new UserRoleMappingConfig());
            builder.ApplyConfiguration(new UserTypeConfig());

            //Inventory Related table configuration
            builder.ApplyConfiguration(new CategoryConfig());
            builder.ApplyConfiguration(new SubCategoryConfig());
            builder.ApplyConfiguration(new ProductConfig());

            //Medical Related table configuration
            builder.ApplyConfiguration(new AppointmentConfig());
            builder.ApplyConfiguration(new PrescriptionDetailConfig());

            //builder.Entity<Category>().ToTable(tb => tb.HasTrigger("trgAfterInsert"));
            //builder.Entity<Category>().ToTable(tb => tb.HasTrigger("trgAfterDelete"));
            //base.OnModelCreating(builder);
        }
    }
}
