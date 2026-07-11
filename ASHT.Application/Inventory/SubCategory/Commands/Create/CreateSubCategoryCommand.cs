using ASHT.Application.Inventory.SubCategory.Queries;
using MediatR;

namespace ASHT.Application.Inventory.SubCategory.Commands.Create
{
    public class CreateSubCategoryCommand : IRequest<SubCategoryVM>
    {
        public int Id { get; set; }
        public string SubCategoryName { get; set; }
        public int CategoryId { get; set; }

    }
}
