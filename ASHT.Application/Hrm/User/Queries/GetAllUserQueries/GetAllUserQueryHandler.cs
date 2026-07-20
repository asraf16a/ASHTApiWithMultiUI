using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Hrm.User.Queries.GetAllUserQueries
{
    public class GetAllUserQueryHandler : IRequestHandler<GetAllUserQuery, List<UserVM>>
    {
        private readonly IUserService _userService;
        public GetAllUserQueryHandler(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<List<UserVM>> Handle(GetAllUserQuery request, CancellationToken cancellationToken)
        {
            return await _userService.GetAllUsersAsync(cancellationToken);
        }
    }
}
