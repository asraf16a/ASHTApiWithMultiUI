using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Hrm.UserType.Query
{
    public class GetAllUserTypeQueryHandler : IRequestHandler<GetAllUserTypeQuery, List<UserTypeVM>>
    {
        private readonly IUserTypeService _userTypeService;
        public GetAllUserTypeQueryHandler(IUserTypeService userTypeService)
        {
            _userTypeService = userTypeService;
        }
        public async Task<List<UserTypeVM>> Handle(GetAllUserTypeQuery request, CancellationToken cancellationToken)
        {
            var userTypes = await _userTypeService.GetAllUserTypesAsync(cancellationToken);
            return MapToUserTypeVM(userTypes);
        }
        private List<UserTypeVM> MapToUserTypeVM(List<Domain.DataModels.UserTypeModel> userTypes)
        {
            return userTypes.Select(userType => new UserTypeVM
            {
                Id = userType.Id,
                Name = userType.Name,

            }).ToList();
        }
    }
}
