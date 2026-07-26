using MediatR;

namespace ASHT.Application.Inventory.Product.Queries.GetAllProducts
{
    public class GetAllProductQuery : IRequest<List<GetProductVM>>
    {
    }
}
