using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace ASHT.SharedKarnel.Dto
{
    public class APIResponse
    {
        public bool Status { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public dynamic Data { get; set; }
        public List<string> Errors { get; set; }
    }
}
