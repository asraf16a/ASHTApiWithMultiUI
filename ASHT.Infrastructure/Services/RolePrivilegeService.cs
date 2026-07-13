using ASHT.Domain.Entities.Hrm;
using ASHT.Domain.Interface;
using ASHT.Persistent;

namespace ASHT.Infrastructure.Services
{
    public class RolePrivilegeService : IRolePrivilegeService
    {
        public readonly ASHTDbContext _context;
        public RolePrivilegeService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<RolePrivilege> AddAsync(RolePrivilege rolePrivilege)
        {
            _context.RolePrivileges.Add(rolePrivilege);
            await _context.SaveChangesAsync();
            return rolePrivilege;
        }
    }
}
