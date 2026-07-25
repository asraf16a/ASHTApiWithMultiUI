namespace ASHT.Application.Medical.Appointment.Queries
{
    public class AppointmentVM
    {
        public int Id { get; set; }

        public int PatientId { get; set; }

        public int DoctorId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string VisitType { get; set; }

        public string Notes { get; set; }

        public string Diagonosis { get; set; }
    }
}
