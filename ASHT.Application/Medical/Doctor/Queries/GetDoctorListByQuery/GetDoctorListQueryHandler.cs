namespace ASHT.Application.Medical.Doctor.Queries.GetDoctorListByQuery
{
    //public class GetDoctorListQueryHandler : IRequestHandler<GetDoctorListQuery, List<DoctorVM>>
    //{
    //    private readonly IDoctorService _doctorService;

    //    public GetDoctorListQueryHandler(IDoctorService doctorService)
    //    {
    //        _doctorService = doctorService;
    //    }

    //    public async Task<List<DoctorVM>> Handle(GetDoctorListQuery request, CancellationToken cancellationToken)
    //    {
    //        var doctors = await _doctorService.GetDoctorListAsync();

    //        if (doctors == null)
    //            return new List<DoctorVM>();

    //        return doctors.Select(MapTo).ToList();
    //    }

    //    private static DoctorVM MapTo(Domain.Entities.Medical.Doctor doctor)
    //    {
    //        return new DoctorVM
    //        {
    //            Id = doctor.Id,
    //            Name = doctor.Name,
    //            Email = doctor.Email,
    //            Specialization = doctor.Specialization,
    //            Qualifications = doctor.Qualifications,
    //            Gender = doctor.Gender,
    //            DateOfBirth = doctor.DateOfBirth,
    //            YearsOfExperience = doctor.YearsOfExperience,
    //            LicenseNumber = doctor.LicenseNumber,
    //            Department = doctor.Department,
    //            WorkingHours = doctor.WorkingHours,
    //            Status = doctor.Status
    //        };
    //    }
    //}
}
