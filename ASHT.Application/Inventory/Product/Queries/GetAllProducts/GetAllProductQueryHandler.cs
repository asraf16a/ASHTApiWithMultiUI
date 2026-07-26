using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Inventory.Product.Queries.GetAllProducts
{
    public class GetAllProductQueryHandler : IRequestHandler<GetAllProductQuery, List<GetProductVM>>
    {
        private readonly IProductService _productService;
        public GetAllProductQueryHandler(IProductService productService)
        {
            _productService = productService;
        }

        public async Task<List<GetProductVM>> Handle(GetAllProductQuery request, CancellationToken cancellationToken)
        {
            var products = await _productService.GetAllProductsAsync(cancellationToken);
            var productVMs = new List<GetProductVM>();
            foreach (var product in products)
            {
                productVMs.Add(new GetProductVM
                {
                    Id = product.Id,
                    Name = product.Name,
                    Description = product.Description,
                    PurchasePrice = product.PurchasePrice,
                    CategoryId = product.CategoryId,
                    CategoryName = product.CategoryName,
                    SubCategoryId = product.SubCategoryId,
                    SubCategoryName = product.SubCategoryName
                });
            }
            return productVMs;
        }
    }
}
