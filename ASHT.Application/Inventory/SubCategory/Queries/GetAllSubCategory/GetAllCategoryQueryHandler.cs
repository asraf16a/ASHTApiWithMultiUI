using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Inventory.SubCategory.Queries.GetAllSubCategory
{
    public class GetAllCategoryQueryHandler : IRequestHandler<GetAllCategoryQuery, List<GetSubCategoryVM>>
    {
        private readonly ISubCategoryService _subCategoryService;
        public GetAllCategoryQueryHandler(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        public async Task<List<GetSubCategoryVM>> Handle(GetAllCategoryQuery request, CancellationToken cancellationToken)
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
