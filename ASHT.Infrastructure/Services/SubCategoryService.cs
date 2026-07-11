using ASHT.Domain.Entities.Inventory;
using ASHT.Domain.Interface;
using ASHT.Persistent;

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
    }
}
