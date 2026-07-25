namespace ASHT.Application.Medical.PrescriptionDetail.Queries
{
    public class PrescriptionDetailVM
    {
        public int Id { get; set; }

        public string MedicineName { get; set; }

        public string Dosage { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Notes { get; set; }
    }
}
