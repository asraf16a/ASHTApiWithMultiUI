using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Hrm.User.Queries.GetAllUserQueries
{
    public class GetAllUserQueryHandler : IRequestHandler<GetAllUserQuery, List<GetUserVM>>
    {
        private readonly IUserService _userService;
        public GetAllUserQueryHandler(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<List<GetUserVM>> Handle(GetAllUserQuery request, CancellationToken cancellationToken)
        {
            var users = await _userService.GetAllUsersAsync(cancellationToken);
            return MapToGetUserVM(users);
        }

        private List<GetUserVM> MapToGetUserVM(List<Domain.DataModels.UserModel> users)
        {
            return users.Select(user => new GetUserVM
            {
                Id = user.Id,
                Username = user.Username,
                UserTypeName = user.UserTypeName,
                IsActive = user.IsActive,
                CreatedDate = user.CreatedDate,
                ModifiedDate = user.ModifiedDate
            }).ToList();
        }
    }
}
