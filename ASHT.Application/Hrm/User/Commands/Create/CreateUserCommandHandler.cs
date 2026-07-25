using ASHT.Application.Hrm.User.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Hrm.User.Commands.Create
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, UserVM>
    {
        private readonly IUserService _userService;
        public CreateUserCommandHandler(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<UserVM> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var user = new Domain.Entities.Hrm.User
            {
                Id = request.Id,
                Username = request.Username,
                Password = request.Password,
                PasswordSalt = request.PasswordSalt,
                UserTypeId = request.UserTypeId,
                IsActive = request.IsActive,
                IsDeleted = request.IsDeleted,
                CreatedDate = request.CreatedDate,
                ModifiedDate = request.ModifiedDate
            };
            var createdUser = await _userService.AddAsync(user, cancellationToken);
            return new UserVM
            {
                Id = createdUser.Id,
                Username = createdUser.Username,
                Password = createdUser.Password,
                PasswordSalt = createdUser.PasswordSalt,
                UserTypeName = createdUser.UserType?.Name,
                IsActive = createdUser.IsActive,
                IsDeleted = createdUser.IsDeleted,
                CreatedDate = createdUser.CreatedDate,
                ModifiedDate = createdUser.ModifiedDate
            };
        }
    }
}
