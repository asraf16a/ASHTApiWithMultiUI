using ASHT.Domain.DataModels;
using ASHT.Domain.Entities.Inventory;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class SubCategoryService : ISubCategoryService
    {
        private readonly ASHTDbContext _dbContext;
        public SubCategoryService(ASHTDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<SubCategory> AddAsync(SubCategory subCategory)
        {

            _dbContext.SubCategorys.Add(subCategory);
            await _dbContext.SaveChangesAsync();
            return subCategory;
        }

        public async Task<List<SubCategoryModel>> GetAllSubCategoriesAsync()
        {
            var subCategories = await _dbContext.SubCategorys.Include(sc => sc.Category).AsNoTracking()
                .Select(sc => new SubCategoryModel
                {
                    Id = sc.Id,
                    SubCategoryName = sc.SubCategoryName,
                    CategoryId = sc.CategoryId,
                    CategoryName = sc.Category.Name
                })
                .ToListAsync();
            return subCategories;
        }
    }
}
