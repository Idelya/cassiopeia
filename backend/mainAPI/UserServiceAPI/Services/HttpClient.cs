using Data.Enums;
using Newtonsoft.Json;
using System.Net;

namespace MainAPI.Services
{
    public static class HttpClient
    {
        static readonly System.Net.Http.HttpClient client = new System.Net.Http.HttpClient();


        public static T SendRequest<T>(string _apiBaseUri, RequestMethod httpMethod, string route, Dictionary<string, string> postParams = null)
        {
            HttpRequestMessage requestMessage = new HttpRequestMessage(new HttpMethod(httpMethod.ToString()), $"{_apiBaseUri}/{route}");

            if (postParams != null)
                requestMessage.Content = new FormUrlEncodedContent(postParams); 


            HttpResponseMessage response = client.SendAsync(requestMessage).Result;

            string apiResponse = response.Content.ReadAsStringAsync().Result;
            try
            {
                if (apiResponse != "")
                    return JsonConvert.DeserializeObject<T>(apiResponse);
                else
                    throw new Exception();
            }
            catch (Exception ex)
            {
                throw new Exception($"An error ocurred while calling the API: {response.StatusCode} {response.ReasonPhrase}");
            }

        }

    }
}
