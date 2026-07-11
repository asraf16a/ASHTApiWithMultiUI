using ASHT.Domain.Interface;
using ASHT.Persistent;

namespace ASHT.Infrastructure.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ASHTDbContext _dbContext;
        public CategoryService(ASHTDbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
