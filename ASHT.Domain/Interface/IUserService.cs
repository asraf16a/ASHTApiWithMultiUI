using ASHT.Domain.Entities.Hrm;

namespace ASHT.Domain.Interface
{
    public interface IUserService
    {
        Task<User> AddAsync(User user, CancellationToken cancellationToken);

        Task<List<User>> GetAllUsersAsync(int companyId, CancellationToken cancellationToken);

        Task<User?> GetByIdAsync(int id, CancellationToken cancellationToken);

        Task<User?> GetByUsernameAsync(string username, CancellationToken cancellationToken);

    }
}
