using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Hrm.Role.Commands.Update
{
    public class UpdateRoleCommandHandler : IRequestHandler<UpdateRoleCommand, int>
    {
        private readonly IRoleService _roleService;
        public UpdateRoleCommandHandler(IRoleService roleService)
        {
            _roleService = roleService;
        }

        public async Task<int> Handle(UpdateRoleCommand command, CancellationToken cancellation)
        {
            var updateRoleEntity = new Domain.Entities.Hrm.Role()
            {
                RoleName = command.RoleName,
                Description = command.Description,
                IsActive = command.IsActive,
                IsDeleted = command.IsDeleted,
                CreatedDate = command.CreatedDate,
                ModifiedDate = command.ModifiedDate

            };

            var result = await _roleService.UpdateAsync(command.Id, updateRoleEntity, cancellation);
            return result;
        }
    }
}
