using ASHT.Domain.Entities.Medical;
using ASHT.Domain.Interface;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;

namespace ASHT.Infrastructure.Services
{
    public class AppointmentService : IAppointmentService
    {
        private readonly ASHTDbContext _context;
        public AppointmentService(ASHTDbContext context)
        {
            _context = context;
        }

        public async Task<Appointment> CreateAppointmentAsync(int patientId, int doctorId, DateTime appointmentDate, string visitType, string notes, string diagnosis)
        {
            var appointment = new Appointment
            {
                PatientId = patientId,
                DoctorId = doctorId,
                AppointmentDate = appointmentDate,
                VisitType = visitType,
                Notes = notes,
                Diagonosis = diagnosis
            };

            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        public async Task<List<Appointment>> GetAppointmentList()
        {
            var appointments = await _context.Appointments.AsNoTracking().ToListAsync();
            return appointments;
        }
    }
}
