using ASHT.Domain.DataModels;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class UserTypeService : IUserTypeService
    {
        public readonly ASHTDbContext _context;
        public UserTypeService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<List<UserTypeModel>> GetAllUserTypesAsync(CancellationToken cancellationToken)
        {
            return await _context.UserTypes.AsNoTracking()
                                            .Select(ut => new UserTypeModel
                                            {
                                                Id = ut.Id,
                                                Name = ut.Name
                                            })
                                            .OrderByDescending(ut => ut.Id)
                                            .ToListAsync(cancellationToken);
        }
    }
}
