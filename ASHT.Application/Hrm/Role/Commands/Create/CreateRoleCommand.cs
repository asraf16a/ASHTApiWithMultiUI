using ASHT.Application.Hrm.Role.Queries;
using MediatR;

namespace ASHT.Application.Hrm.Role.Commands.Create
{
    public class CreateRoleCommand : IRequest<RoleVM>
    {
        public int Id { get; set; }
        public string RoleName { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
