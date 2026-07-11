using ASHT.Application.Inventory.Category.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Inventory.Category.Commands.Create
{
    public class CreateCategoryCommandHandler : IRequestHandler<CreateCategoryCommand, CategoryVM>
    {
        private readonly ICategoryService _categoryService;
        public CreateCategoryCommandHandler(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        public async Task<CategoryVM> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _categoryService.CreateCategoryAsync(request.Name);

            return new CategoryVM { Id = category.Id, Name = category.Name };

        }
    }
}
