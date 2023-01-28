using Data.Enums;
using MainAPI.DTOs;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;

namespace MainAPI.Services
{
    public static class HttpClient
    {
        static readonly System.Net.Http.HttpClient client = new System.Net.Http.HttpClient();


        public static async Task<HttpResponseMessage> SendRequestAsync(string _apiBaseUri, RequestMethod httpMethod, Dictionary<string, string> postParams = null)
        {
            HttpRequestMessage requestMessage = new HttpRequestMessage(new HttpMethod(httpMethod.ToString()), $"{_apiBaseUri}");

            if (postParams != null)
                requestMessage.Content = new FormUrlEncodedContent(postParams);


            HttpResponseMessage response = client.SendAsync(requestMessage).Result;

            string apiResponse =  response.Content.ReadAsStringAsync().Result;
            return response;
            //var result = new Response() { StatusCode = response.StatusCode, Content = apiResponse };
            //if (result.StatusCode != HttpStatusCode.OK)
            //{
            //    IActionResult response1 = Action(result);
            //    return response;
            //}
            //return ResponseMessage(result);
        }

    }
}
