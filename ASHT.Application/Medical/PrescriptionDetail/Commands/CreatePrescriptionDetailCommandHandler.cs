using ASHT.Application.Medical.PrescriptionDetail.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Medical.PrescriptionDetail.Commands
{
    public class CreatePrescriptionDetailCommandHandler : IRequestHandler<CreatePrescriptionDetailCommand, PrescriptionDetailVM>
    {
        private readonly IPrescriptionDetailService _prescriptionDetailService;


        public CreatePrescriptionDetailCommandHandler(IPrescriptionDetailService prescriptionDetailService)
        {
            _prescriptionDetailService = prescriptionDetailService;
        }

        public async Task<PrescriptionDetailVM> Handle(CreatePrescriptionDetailCommand request, CancellationToken cancellationToken)
        {
            var prescriptionDetailsEntity = new Domain.Entities.Medical.PrescriptionDetail
            {
                MedicineName = request.MedicineName,
                Dosage = request.Dosage,
                StartDate = request.StartDate,
                EndDate = request.EndDate,
                Notes = request.Notes
            };

            var prescriptionDetail = await _prescriptionDetailService.CreatePrescriptionDetailAsync(prescriptionDetailsEntity, cancellationToken);
            return new PrescriptionDetailVM
            {
                Id = prescriptionDetail.Id,
                MedicineName = prescriptionDetail.MedicineName,
                Dosage = prescriptionDetail.Dosage,
                StartDate = prescriptionDetail.StartDate,
                EndDate = prescriptionDetail.EndDate,
                Notes = prescriptionDetail.Notes
            };
        }
    }
}
