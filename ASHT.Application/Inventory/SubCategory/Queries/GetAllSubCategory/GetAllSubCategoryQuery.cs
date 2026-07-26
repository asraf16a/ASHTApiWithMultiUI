using MediatR;

namespace ASHT.Application.Inventory.SubCategory.Queries.GetAllSubCategory
{
    public class GetAllSubCategoryQuery : IRequest<List<GetSubCategoryVM>>
    {
    }
}
