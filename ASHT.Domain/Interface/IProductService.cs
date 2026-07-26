using ASHT.Domain.DataModels;
using ASHT.Domain.Entities.Inventory;

namespace ASHT.Domain.Interface
{
    public interface IProductService
    {
        Task<Product> AddAsync(Product product);
        Task<List<ProductModel>> GetAllProductsAsync(CancellationToken cancellationToken);
    }
}
