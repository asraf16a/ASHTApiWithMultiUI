using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Medical.PrescriptionDetail.Queries.GetPrescriptionDetails
{
    public class GetPrescriptionDetailsByQueryHandler : IRequestHandler<GetPrescriptionDetailsByQuery, List<GetPrescriptionDetailsVM>>
    {
        private readonly IPrescriptionDetailService _prescriptionDetailService;
        public GetPrescriptionDetailsByQueryHandler(IPrescriptionDetailService prescriptionDetailService)
        {
            _prescriptionDetailService = prescriptionDetailService;
        }

        public async Task<List<GetPrescriptionDetailsVM>> Handle(GetPrescriptionDetailsByQuery request, CancellationToken cancellationToken)
        {
            var prescriptionDetails = await _prescriptionDetailService.GetAllPrescriptionDetailsAsync();
            var prescriptionDetailsVM = new List<GetPrescriptionDetailsVM>();
            foreach (var detail in prescriptionDetails)
            {
                prescriptionDetailsVM.Add(new GetPrescriptionDetailsVM
                {
                    Id = detail.Id,
                    MedicineName = detail.MedicineName,
                    Dosage = detail.Dosage,
                    StartDate = detail.StartDate,
                    EndDate = detail.EndDate,
                    Notes = detail.Notes
                });
            }
            return prescriptionDetailsVM;
        }
    }
}
