using MediatR;

namespace ASHT.Application.Hrm.Role.Commands.Update
{
    public class UpdateRoleCommand : IRequest<int>
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
