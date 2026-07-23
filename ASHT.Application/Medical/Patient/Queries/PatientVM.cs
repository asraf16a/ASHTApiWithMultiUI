namespace ASHT.Application.Medical.Patient.Queries
{
    public class PatientVM
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }

        // Contact Information
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }

        // Medical Information
        public string BloodType { get; set; }
        public string Allergies { get; set; }
        public string MedicalHistory { get; set; }
        public string CurrentMedications { get; set; }


        public string InsuranceProvider { get; set; }
        public string InsuranceNumber { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public Guid CreatedBy { get; set; }
        public bool IsActive { get; set; } = true;

    }
}
