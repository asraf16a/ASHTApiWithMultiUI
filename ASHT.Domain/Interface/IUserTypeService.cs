using ASHT.Domain.DataModels;

namespace ASHT.Domain.Interface
{
    public interface IUserTypeService
    {
        Task<List<UserTypeModel>> GetAllUserTypesAsync(CancellationToken cancellationToken);
    }
}
