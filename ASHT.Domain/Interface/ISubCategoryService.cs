using ASHT.Domain.DataModels;
using ASHT.Domain.Entities.Inventory;

namespace ASHT.Domain.Interface
{
    public interface ISubCategoryService
    {
        Task<SubCategory> AddAsync(SubCategory subCategory);

        Task<List<SubCategoryModel>> GetAllSubCategoriesAsync();
    }
}
