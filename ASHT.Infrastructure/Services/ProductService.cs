using ASHT.Domain.DataModels;
using ASHT.Domain.Entities.Inventory;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class ProductService : IProductService
    {
        public readonly ASHTDbContext _context;
        public ProductService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<Product> AddAsync(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<List<ProductModel>> GetAllProductsAsync(CancellationToken cancellationToken)
        {
            return await _context.Products
                .Include(x => x.SubCategory).Include(x => x.Category).AsNoTracking()
                .Select(p => new ProductModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category.Name,
                    SubCategoryId = p.SubCategoryId,
                    SubCategoryName = p.SubCategory.SubCategoryName,
                    Description = p.Description,
                    Feature = p.Feature,
                    PurchasePrice = p.PurchasePrice,
                    ImageContent = p.ImageContent
                }).ToListAsync(cancellationToken);
        }
    }
}
