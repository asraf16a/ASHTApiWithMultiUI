using ASHT.Application.Inventory.Product.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Inventory.Product.Commands.Create
{
    public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, ProductVM>
    {
        private readonly IProductService _productService;
        public CreateProductCommandHandler(IProductService productService)
        {
            _productService = productService;
        }

        public async Task<ProductVM> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var product = new Domain.Entities.Inventory.Product
            {
                Id = request.Id,
                CategoryId = request.CategoryId,
                SubCategoryId = request.SubCategoryId,
                Name = request.Name,
                Description = request.Description,
                Feature = request.Feature,
                PurchasePrice = request.PurchasePrice,
                ImageContent = request.ImageContent
            };

            var result = await _productService.AddAsync(product);

            return MapTo(result);

        }

        private ProductVM MapTo(Domain.Entities.Inventory.Product product)
        {
            return new ProductVM
            {
                Id = product.Id,
                CategoryId = product.CategoryId,
                SubCategoryId = product.SubCategoryId,
                Name = product.Name,
                Description = product.Description,
                Feature = product.Feature,
                PurchasePrice = product.PurchasePrice,
                ImageContent = product.ImageContent
            };
        }
    }
}
