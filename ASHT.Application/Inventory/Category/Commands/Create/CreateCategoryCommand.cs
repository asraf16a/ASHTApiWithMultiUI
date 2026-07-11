using ASHT.Application.Inventory.Category.Queries;
using MediatR;

namespace ASHT.Application.Inventory.Category.Commands.Create
{
    public class CreateCategoryCommand : IRequest<CategoryVM>
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
