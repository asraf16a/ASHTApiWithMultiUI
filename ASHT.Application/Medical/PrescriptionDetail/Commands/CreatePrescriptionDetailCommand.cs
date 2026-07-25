using ASHT.Application.Medical.PrescriptionDetail.Queries;
using MediatR;

namespace ASHT.Application.Medical.PrescriptionDetail.Commands
{
    public class CreatePrescriptionDetailCommand : IRequest<PrescriptionDetailVM>
    {
        public string MedicineName { get; set; }
        public string Dosage { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Notes { get; set; }
    }
}
