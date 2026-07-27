using System.Net;

namespace ASHT.SharedKarnel.Dto
{
    public class APIResponse
    {
        public APIResponse()
        {
            Errors = new List<string>();
        }
        public bool Status { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public dynamic Data { get; set; }
        public List<string> Errors { get; set; }
    }
}
