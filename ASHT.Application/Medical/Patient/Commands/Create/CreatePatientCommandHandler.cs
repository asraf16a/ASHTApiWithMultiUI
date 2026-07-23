using ASHT.Application.Medical.Patient.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Medical.Patient.Commands.Create
{
    public class CreatePatientCommandHandler : IRequestHandler<CreatePatientCommand, PatientVM>
    {
        private readonly IPatientService _patientService;
        public CreatePatientCommandHandler(IPatientService patientService)
        {
            _patientService = patientService;
        }

        public async Task<PatientVM> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
        {
            var patientEntity = new Domain.Entities.Medical.Patient
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                DateOfBirth = request.DateOfBirth,
                Gender = request.Gender,
                PhoneNumber = request.PhoneNumber,
                Email = request.Email,
                Address = request.Address,
                BloodType = request.BloodType,
                Allergies = request.Allergies,
                MedicalHistory = request.MedicalHistory,
                CurrentMedications = request.CurrentMedications,
                InsuranceProvider = request.InsuranceProvider,
                InsuranceNumber = request.InsuranceNumber,
                CreatedDate = request.CreatedDate,
                CreatedBy = request.CreatedBy,
                IsActive = request.IsActive,
            };

            var createdPatient = await _patientService.CreatePatientAsync(patientEntity);

            var patientVM = new PatientVM
            {
                Id = createdPatient.Id,
                FirstName = createdPatient.FirstName,
                LastName = createdPatient.LastName,
                DateOfBirth = createdPatient.DateOfBirth,
                Gender = createdPatient.Gender,
                Email = createdPatient.Email,
                PhoneNumber = createdPatient.PhoneNumber,
                Address = createdPatient.Address,
                BloodType = createdPatient.BloodType,
                Allergies = createdPatient.Allergies,
                MedicalHistory = createdPatient.MedicalHistory,
                CurrentMedications = createdPatient.CurrentMedications,
                InsuranceProvider = createdPatient.InsuranceProvider,
                InsuranceNumber = createdPatient.InsuranceNumber,
                CreatedDate = createdPatient.CreatedDate,
                CreatedBy = createdPatient.CreatedBy,
                IsActive = createdPatient.IsActive,
            };
            return patientVM;
        }

    }
}
