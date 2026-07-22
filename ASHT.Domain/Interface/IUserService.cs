using ASHT.Domain.DataModels;
using ASHT.Domain.Entities.Hrm;

namespace ASHT.Domain.Interface
{
    public interface IUserService
    {
        Task<User> AddAsync(User user, CancellationToken cancellationToken);

        Task<List<UserModel>> GetAllUsersAsync(CancellationToken cancellationToken);

        Task<User?> GetByIdAsync(int id, CancellationToken cancellationToken);

        Task<User?> GetByUsernameAsync(string username, CancellationToken cancellationToken);

    }
}
