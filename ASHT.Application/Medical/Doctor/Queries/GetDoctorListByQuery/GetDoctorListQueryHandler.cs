using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Medical.Doctor.Queries.GetDoctorListByQuery
{
    public class GetDoctorListQueryHandler : IRequestHandler<GetDoctorListQuery, List<GetDoctorVM>>
    {
        private readonly IDoctorService _doctorService;

        public GetDoctorListQueryHandler(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        public async Task<List<GetDoctorVM>> Handle(GetDoctorListQuery query, CancellationToken cancellationToken)
        {
            var doctors = await _doctorService.GetDoctorListAsync();

            if (doctors == null)
            {
                return new List<GetDoctorVM>();
            }

            return doctors.Select(MapTo).ToList();
        }

        private static GetDoctorVM MapTo(Domain.Entities.Medical.Doctor doctor)
        {
            return new GetDoctorVM
            {
                Id = doctor.Id,
                Name = doctor.Name,
                Email = doctor.Email,
                Specialization = doctor.Specialization,
                Qualifications = doctor.Qualifications,
                Gender = doctor.Gender,
                DateOfBirth = doctor.DateOfBirth,
                YearsOfExperience = doctor.YearsOfExperience,
                LicenseNumber = doctor.LicenseNumber,
                Department = doctor.Department,
                WorkingHours = doctor.WorkingHours,
                Status = doctor.Status
            };
        }
    }
}
