using System.Net;

namespace MainAPI.DTOs
{
    public class Response
    {
        public HttpStatusCode StatusCode { get; set; }
        public string Content { get; set; }
    }
}
