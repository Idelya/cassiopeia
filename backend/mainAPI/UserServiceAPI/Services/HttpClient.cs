using Data.Enums;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.Text;
using System.Text.Json;
using System.Net.Http;
using ImageServiceAPI.DTOs;

namespace MainAPI.Services
{
    public static class HttpClient
    {
        static readonly System.Net.Http.HttpClient client = new System.Net.Http.HttpClient();


        public static async Task<HttpResponseMessage> SendRequestAsync(string url, RequestMethod httpMethod, object postParams = null)
        {
            HttpRequestMessage requestMessage = new HttpRequestMessage(new HttpMethod(httpMethod.ToString()), $"{url}");
            HttpResponseMessage response;

            if (postParams != null)
            {
                var body = JsonSerializer.Serialize(postParams);

                var requestContent = new StringContent(body, Encoding.UTF8, "application/json");
                response = client.PostAsync(url, requestContent).Result;
            }
            else if (httpMethod == RequestMethod.Delete)
            {
                response = client.DeleteAsync(url).Result;
            }
            else
            {
                response = client.SendAsync(requestMessage).Result;
            }
            return response;
        }

        public static async Task<HttpResponseMessage> SendWithFormFileAsync(string url, RequestMethod httpMethod, AddOfferImageRequest formData = null)
        {
            HttpRequestMessage requestMessage = new HttpRequestMessage(new HttpMethod(httpMethod.ToString()), $"{url}");
            HttpResponseMessage response;
            
            if (formData != null)
            {
                response = client.PostAsync(url, null).Result;
            }
            else if (httpMethod == RequestMethod.Delete)
            {
                response = client.DeleteAsync(url).Result;
            }
            else
            {
                response = client.SendAsync(requestMessage).Result;
            }
            return response;
        }
    }
}