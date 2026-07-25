using ASHT.Domain.Entities.Medical;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class PrescriptionDetailService : IPrescriptionDetailService
    {
        private readonly ASHTDbContext _context;
        public PrescriptionDetailService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<PrescriptionDetail> CreatePrescriptionDetailAsync(PrescriptionDetail prescriptionDetail, CancellationToken cancellationToken)
        {
            _context.PrescriptionDetails.Add(prescriptionDetail);
            await _context.SaveChangesAsync(cancellationToken);
            return prescriptionDetail;
        }

        public async Task<List<PrescriptionDetail>> GetAllPrescriptionDetailsAsync()
        {
            var prescriptionDetails = await _context.PrescriptionDetails.AsNoTracking().ToListAsync();
            return prescriptionDetails;
        }
    }
}
