using ASHT.Domain.Entities.Hrm;
using ASHT.Domain.Interface;
using ASHT.Persistent;

namespace ASHT.Infrastructure.Services
{
    public class RoleService : IRoleService
    {
        public readonly ASHTDbContext _context;
        public RoleService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<Role> AddAsync(Role role)
        {
            _context.Roles.Add(role);
            await _context.SaveChangesAsync();
            return role;
        }
    }
}
