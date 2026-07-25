using ASHT.Domain.Entities.Medical;

namespace ASHT.Domain.Interface
{
    public interface IPrescriptionDetailService
    {
        Task<PrescriptionDetail> CreatePrescriptionDetailAsync(PrescriptionDetail prescriptionDetail, CancellationToken cancellationToken);

        Task<List<PrescriptionDetail>> GetAllPrescriptionDetailsAsync();
    }
}
