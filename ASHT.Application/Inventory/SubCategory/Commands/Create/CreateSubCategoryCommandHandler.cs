using ASHT.Application.Inventory.SubCategory.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Inventory.SubCategory.Commands.Create
{
    public class CreateSubCategoryCommandHandler : IRequestHandler<CreateSubCategoryCommand, SubCategoryVM>
    {
        private readonly ISubCategoryService _subCategoryService;
        public CreateSubCategoryCommandHandler(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        public async Task<SubCategoryVM> Handle(CreateSubCategoryCommand request, CancellationToken cancellationToken)
        {
            var subCategoryEntity = new Domain.Entities.Inventory.SubCategory
            {
                SubCategoryName = request.SubCategoryName,
                CategoryId = request.CategoryId
            };
            var subCategory = await _subCategoryService.AddAsync(subCategoryEntity);
            return new SubCategoryVM { Id = subCategory.Id, SubCategoryName = subCategory.SubCategoryName, CategoryId = subCategory.CategoryId };
        }
    }
}
