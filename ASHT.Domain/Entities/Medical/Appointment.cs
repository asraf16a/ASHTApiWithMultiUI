using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASHT.Domain.Entities.Medical
{
    [Table("Appointments", Schema = "medical")]
    public class Appointment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int PatientId { get; set; }

        public int DoctorId { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string VisitType { get; set; }

        public string Notes { get; set; }

        public string Diagonosis { get; set; }

    }
}
