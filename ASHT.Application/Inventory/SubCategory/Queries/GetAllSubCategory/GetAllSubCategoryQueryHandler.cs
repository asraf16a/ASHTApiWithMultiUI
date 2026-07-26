using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Inventory.SubCategory.Queries.GetAllSubCategory
{
    public class GetAllSubCategoryQueryHandler : IRequestHandler<GetAllSubCategoryQuery, List<GetSubCategoryVM>>
    {
        private readonly ISubCategoryService _subCategoryService;
        public GetAllSubCategoryQueryHandler(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        public async Task<List<GetSubCategoryVM>> Handle(GetAllSubCategoryQuery request, CancellationToken cancellationToken)
        {
            var subCategories = await _subCategoryService.GetAllSubCategoriesAsync();
            return subCategories.Select(sc => new GetSubCategoryVM
            {
                Id = sc.Id,
                SubCategoryName = sc.SubCategoryName,
                CategoryId = sc.CategoryId,
                CategoryName = sc.CategoryName
            }).ToList();
        }
    }
}
