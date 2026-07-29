using ASHT.Application.Hrm.Role.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Hrm.Role.Commands.Create
{
    public class CreateRoleCommandHandler : IRequestHandler<CreateRoleCommand, RoleVM>
    {
        private readonly IRoleService _roleService;
        public CreateRoleCommandHandler(IRoleService roleService)
        {
            _roleService = roleService;
        }

        public async Task<RoleVM> Handle(CreateRoleCommand command, CancellationToken cancellationToken)
        {
            var role = new Domain.Entities.Hrm.Role
            {
                RoleName = command.RoleName,
                Description = command.Description,
                IsActive = command.IsActive,
                IsDeleted = command.IsDeleted,
                CreatedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow
            };

            var createdRole = await _roleService.AddAsync(role);
            return new RoleVM
            {
                Id = createdRole.Id,
                RoleName = createdRole.RoleName,
                Description = createdRole.Description,
                IsActive = createdRole.IsActive,
                IsDeleted = createdRole.IsDeleted,
                CreatedDate = createdRole.CreatedDate,
                ModifiedDate = createdRole.ModifiedDate
            };
        }
    }
}
