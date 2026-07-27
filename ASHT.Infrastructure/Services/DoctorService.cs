using ASHT.Domain.Entities.Medical;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class DoctorService : IDoctorService
    {
        private readonly ASHTDbContext _context;
        public DoctorService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<Doctor> CreateDoctorAsync(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
            return doctor;
        }

        public async Task<List<Doctor>> GetDoctorListAsync()
        {
            var doctors = await _context.Doctors.AsNoTracking().ToListAsync();
            return doctors;
        }
    }
}
