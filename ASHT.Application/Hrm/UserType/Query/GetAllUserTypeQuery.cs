using MediatR;

namespace ASHT.Application.Hrm.UserType.Query
{
    public class GetAllUserTypeQuery : IRequest<List<UserTypeVM>>
    {
    }
}
