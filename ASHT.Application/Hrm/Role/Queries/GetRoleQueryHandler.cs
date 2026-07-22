using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Hrm.Role.Queries
{
    public class GetRoleQueryHandler : IRequestHandler<GetRoleQuery, List<RoleVM>>
    {
        private readonly IRoleService _roleService;
        public GetRoleQueryHandler(IRoleService roleService)
        {
            _roleService = roleService;
        }

        public async Task<List<RoleVM>> Handle(GetRoleQuery request, CancellationToken cancellationToken)
        {
            var roles = await _roleService.GetAllRolesAsync(cancellationToken);
            return MapToRoleVM(roles);
        }

        private List<RoleVM> MapToRoleVM(List<Domain.DataModels.RoleModel> roles)
        {
            return roles.Select(role => new RoleVM
            {
                Id = role.Id,
                RoleName = role.RoleName,
                Description = role.Description,
                IsActive = role.IsActive

            }).ToList();
        }
    }
}
