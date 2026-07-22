using ASHT.Domain.DataModels;
using ASHT.Domain.Entities.Hrm;

namespace ASHT.Domain.Interface
{
    public interface IRoleService
    {
        Task<Role> AddAsync(Role role);

        Task<int> UpdateAsync(int id, Role role, CancellationToken cancellation);

        Task<List<RoleModel>> GetAllRolesAsync(CancellationToken cancellationToken);
    }
}
