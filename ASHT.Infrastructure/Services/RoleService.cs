using ASHT.Domain.DataModels;
using ASHT.Domain.Entities.Hrm;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

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

        public async Task<int> UpdateAsync(int id, Role role, CancellationToken cancellation)
        {
            return await _context.Roles
                  .Where(model => model.Id == id)
                  .ExecuteUpdateAsync(setters => setters
                    .SetProperty(m => m.RoleName, role.RoleName)
                    .SetProperty(m => m.Description, role.Description)
                    .SetProperty(m => m.IsDeleted, role.IsDeleted)
                  );
        }

        public async Task<List<RoleModel>> GetAllRolesAsync(CancellationToken cancellationToken)
        {
            return await _context.Roles
                .Where(r => !r.IsDeleted)
                .Select(r => new RoleModel
                {
                    Id = r.Id,
                    RoleName = r.RoleName,
                    Description = r.Description,
                    IsActive = r.IsActive
                })
                .OrderByDescending(r => r.Id)
                .ToListAsync(cancellationToken);
        }
    }
}
