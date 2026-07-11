using ASHT.Domain.Entities.Inventory;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using System;
using System.Collections.Generic;
using System.Text;

namespace ASHT.Infrastructure.Services
{
    public class ProductService: IProductService
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
    }
}
