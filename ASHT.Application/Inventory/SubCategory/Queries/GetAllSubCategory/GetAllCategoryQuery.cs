using MediatR;

namespace ASHT.Application.Inventory.SubCategory.Queries.GetAllSubCategory
{
    public class GetAllCategoryQuery : IRequest<List<GetSubCategoryVM>>
    {
    }
}
