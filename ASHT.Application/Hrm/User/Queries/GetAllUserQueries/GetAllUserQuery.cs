using MediatR;

namespace ASHT.Application.Hrm.User.Queries.GetAllUserQueries
{
    public class GetAllUserQuery : IRequest<List<UserVM>>
    {
        public int CompanyId { get; set; }
    }
}
