using ASHT.Domain.Entities.Medical;

namespace ASHT.Domain.Interface
{
    public interface IPatientService
    {
        Task<Patient> CreatePatientAsync(Patient patient);
        Task<List<Patient>> GetPatientList();

    }
}
