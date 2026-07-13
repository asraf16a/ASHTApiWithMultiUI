using ASHT.Domain.Entities.Inventory;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ASHT.Domain.Config
{
    public class ProductConfig : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Products", "inventory");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).UseIdentityColumn();
            builder.Property(r => r.Name).HasMaxLength(250).IsRequired();
            builder.Property(r => r.Description).HasMaxLength(500);
            builder.Property(r => r.CategoryId).IsRequired();
            builder.Property(r => r.SubCategoryId).IsRequired();
            builder.Property(r => r.Feature);
            builder.Property(r => r.PurchasePrice);
            //builder.Property(x => x.PurchasePrice).HasPrecision(18, 2);
            builder.Property(r => r.ImageContent);
        }
    }
}
