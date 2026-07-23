using ASHT.Domain.Entities.Medical;

namespace ASHT.Domain.Interface
{
    public interface IDoctorService
    {
        Task<Doctor> CreateDoctorAsync(Doctor doctor);
        Task<List<Doctor>> GetDoctorListAsync();

    }
}
