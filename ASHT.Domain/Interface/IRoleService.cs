using ASHT.Domain.Entities.Hrm;

namespace ASHT.Domain.Interface
{
    public interface IRoleService
    {
        Task<Role> AddAsync(Role role);
    }
}
