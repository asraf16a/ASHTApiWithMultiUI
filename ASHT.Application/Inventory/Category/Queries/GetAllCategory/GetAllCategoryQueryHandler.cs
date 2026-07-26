using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Inventory.Category.Queries.GetAllCategory
{
    public class GetAllCategoryQueryHandler : IRequestHandler<GetAllCategoryQuery, List<CategoryVM>>
    {
        private readonly ICategoryService _categoryService;
        public GetAllCategoryQueryHandler(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        public async Task<List<CategoryVM>> Handle(GetAllCategoryQuery request, CancellationToken cancellationToken)
        {
            var categories = await _categoryService.GetAllAsync(cancellationToken);
            var categoryVMs = new List<CategoryVM>();
            foreach (var category in categories)
            {
                categoryVMs.Add(new CategoryVM
                {
                    Id = category.Id,
                    Name = category.Name
                });
            }
            return categoryVMs;
        }
    }
}
