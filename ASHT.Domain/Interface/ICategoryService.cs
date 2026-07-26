using ASHT.Domain.Entities.Inventory;

namespace ASHT.Domain.Interface
{
    public interface ICategoryService
    {
        Task<Category> CreateCategoryAsync(string name);

        Task<List<Category>> GetAllAsync(CancellationToken cancellationToken);
    }
}
