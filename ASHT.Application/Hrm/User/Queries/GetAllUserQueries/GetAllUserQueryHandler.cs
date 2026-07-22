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
            var users = await _userService.GetAllUsersAsync(cancellationToken);
            return MapToUserVM(users);
        }

        private List<UserVM> MapToUserVM(List<Domain.Entities.Hrm.User> users)
        {
            return users.Select(user => new UserVM
            {
                Id = user.Id,
                Username = user.Username,
                Password = user.Password,
                PasswordSalt = user.PasswordSalt,
                UserTypeId = user.UserTypeId,
                IsActive = user.IsActive,
                IsDeleted = user.IsDeleted,
                CreatedDate = user.CreatedDate,
                ModifiedDate = user.ModifiedDate
            }).ToList();
        }
    }
}
