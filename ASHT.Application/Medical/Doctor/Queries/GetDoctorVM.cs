namespace ASHT.Application.Medical.Doctor.Queries
{
    public class GetDoctorVM
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Specialization { get; set; }

        public string Qualifications { get; set; }

        public string Gender { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string YearsOfExperience { get; set; }

        public string LicenseNumber { get; set; }

        public string Department { get; set; }

        public string WorkingHours { get; set; }

        public string Status { get; set; }
    }
}
