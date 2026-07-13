using ASHT.Domain.Entities.Hrm;
using ASHT.Domain.Interface;
using ASHT.Persistent;

namespace ASHT.Infrastructure.Services
{
    public class UserService : IUserService
    {
        public readonly ASHTDbContext _context;
        public UserService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<User> AddAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }
    }
}
