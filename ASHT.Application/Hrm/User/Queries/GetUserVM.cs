namespace ASHT.Application.Hrm.User.Queries
{
    public class GetUserVM
    {
        public int Id { get; set; }
        public string Username { get; set; }

        public string UserTypeName { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }
    }
}
