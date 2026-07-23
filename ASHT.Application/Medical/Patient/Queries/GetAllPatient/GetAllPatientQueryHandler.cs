using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Medical.Patient.Queries.GetAllPatient
{
    public class GetAllPatientQueryHandler : IRequestHandler<GetAllPatientQuery, List<GetPatientVM>>
    {
        private readonly IPatientService _patientService;
        public GetAllPatientQueryHandler(IPatientService patientService)
        {
            _patientService = patientService;
        }

        public async Task<List<GetPatientVM>> Handle(GetAllPatientQuery request, CancellationToken cancellationToken)
        {
            var patients = await _patientService.GetPatientList();
            return patients.Select(p => new GetPatientVM
            {
                Id = p.Id,
                FirstName = p.FirstName,
                LastName = p.LastName,
                Email = p.Email,
                Gender = p.Gender,
                DateOfBirth = p.DateOfBirth,
                PhoneNumber = p.PhoneNumber,
            }).ToList();


        }
    }
}
