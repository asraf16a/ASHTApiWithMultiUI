using ASHT.Application.Medical.Appointment.Queries;
using ASHT.Domain.Interface;
using MediatR;

namespace ASHT.Application.Medical.Appointment.Commands
{
    public class CreateAppointmentCommandHandler : IRequestHandler<CreateAppointmentCommand, AppointmentVM>
    {
        private readonly IAppointmentService _appointmentService;
        public CreateAppointmentCommandHandler(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        public async Task<AppointmentVM> Handle(CreateAppointmentCommand request, CancellationToken cancellationToken)
        {
            var appointment = await _appointmentService.CreateAppointmentAsync(request.PatientId, request.DoctorId, request.AppointmentDate, request.VisitType, request.Notes, request.Diagonosis);
            if (appointment == null)
                return null;
            return new AppointmentVM
            {
                Id = appointment.Id,
                PatientId = appointment.PatientId,
                DoctorId = appointment.DoctorId,
                AppointmentDate = appointment.AppointmentDate,
                VisitType = appointment.VisitType,
                Notes = appointment.Notes,
                Diagonosis = appointment.Diagonosis
            };
        }
    }
}
