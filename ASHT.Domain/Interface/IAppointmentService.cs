using ASHT.Domain.Entities.Medical;

namespace ASHT.Domain.Interface
{
    public interface IAppointmentService
    {
        Task<Appointment> CreateAppointmentAsync(int patientId, int doctorId, DateTime appointmentDate, string visitType, string notes, string diagnosis);
        Task<List<Appointment>> GetAppointmentList();
    }
}
