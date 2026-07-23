using ASHT.Application.Medical.Doctor.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Medical.Doctor.Commands.Create
{
    public class CreateDoctorCommandHandler : IRequestHandler<CreateDoctorCommand, DoctorVM>
    {
        private readonly IDoctorService _doctorService;
        public CreateDoctorCommandHandler(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        public async Task<DoctorVM> Handle(CreateDoctorCommand request, CancellationToken cancellationToken)
        {
            var doctorEntity = new Domain.Entities.Medical.Doctor
            {
                Name = request.Name,
                Email = request.Email,
                Specialization = request.Specialization,
                Qualifications = request.Qualifications,
                Gender = request.Gender,
                DateOfBirth = request.DateOfBirth,
                YearsOfExperience = request.YearsOfExperience,
                LicenseNumber = request.LicenseNumber,
                Department = request.Department,
                WorkingHours = request.WorkingHours,
                Status = request.Status

            };
            var result = await _doctorService.CreateDoctorAsync(doctorEntity);
            return MapTo(result);
        }

        private DoctorVM MapTo(Domain.Entities.Medical.Doctor doctor)
        {
            return new DoctorVM
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
