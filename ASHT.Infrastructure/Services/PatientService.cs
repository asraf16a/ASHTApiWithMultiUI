using ASHT.Domain.Entities.Medical;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class PatientService : IPatientService
    {
        private readonly ASHTDbContext _context;
        public PatientService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<Patient> CreatePatientAsync(Patient patient)
        {
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();
            return patient;
        }

        public async Task<List<Patient>> GetPatientList()
        {
            var patients = await _context.Patients.AsNoTracking().ToListAsync();
            return patients;
        }
    }
}
