using ASHT.Domain.Entities.Inventory;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ASHTDbContext _dbContext;
        public CategoryService(ASHTDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Category> CreateCategoryAsync(string name)
        {
            var category = new Category { Name = name };
            _dbContext.Categorys.Add(category);
            await _dbContext.SaveChangesAsync();
            return category;
        }


        public async Task<List<Category>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await _dbContext.Categorys.AsNoTracking().ToListAsync(cancellationToken);
        }
    }
}
