using ASHT.Domain.Entities.Hrm;

namespace ASHT.Domain.Interface
{
    public interface IUserService
    {
        Task<User> AddAsync(User user);
    }
}
