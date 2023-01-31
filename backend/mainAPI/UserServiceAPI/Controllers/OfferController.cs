using Data.Enums;
using MainAPI.DTOs;
using MainAPI.MicroServicesConfig;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MainAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferController : Controller
    {
        public string OfferBaseUrl = $"{ShoppingServiceConfig.SHOPPING_SERVICE_BASE_URL}/{ShoppingServiceConfig.OFFER_CONTROLLER_NAME}";

        [HttpGet("all")]
        public async Task<ActionResult> GetOffersAsync()
        {
            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.GET_OFFERS}";
            return await RedirectRequest(url);
        }

        [HttpGet("user/{id}")]
        public async Task<ActionResult> GetOfferPublishBySellerAsync([FromRoute] string id)
        {
            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.GET_OFFERS}/{id}";
            return await RedirectRequest(url);
        }

        [HttpPost("edit")]
        public async Task<ActionResult> EditOfferAsync([FromBody] OfferEditRequest request)
        {
            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.EDIT_OFFER}";
            return await RedirectRequest(url, RequestMethod.Post, request);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetOfferAsync([FromRoute] int id)
        {
            var url = $"{OfferBaseUrl}/{id}";
            return await RedirectRequest(url);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteOffer([FromRoute] int id)
        {
            var url = $"{OfferBaseUrl}/{id}";
            return await RedirectRequest(url, RequestMethod.Delete);
        }

        [HttpGet("delivery")]
        public async Task<ActionResult> GetDeliveries()
        {
            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.GET_DELIVERIES}";
            return await RedirectRequest(url);
        }


        [HttpPost("create")]
        public async Task<ActionResult> CreateOffer([FromBody] CreateOfferRequest request)
        {
            var userToken = Request.Headers.FirstOrDefault(x => x.Key == "userToken");

            var principal = ValidateToken(userToken.Value);
            var userId = principal.Claims.Where(x => x.Type == "userId").Select(x => x.Value).FirstOrDefault();

            var url = $"{OfferBaseUrl}/{ShoppingServiceConfig.CREATE_OFFER}/{userId}";
            return await RedirectRequest(url, RequestMethod.Post, request);
        }

        private async Task<ActionResult> RedirectRequest(string url, RequestMethod method = RequestMethod.Get, object body = null)
        {
            var t = await Services.HttpClient.SendRequestAsync(url, method, body);
            return StatusCode((int)t.StatusCode, t.Content.ReadAsStringAsync().Result);
        }

        private static ClaimsPrincipal ValidateToken(string jwtToken)
        {
            IdentityModelEventSource.ShowPII = true;

            SecurityToken validatedToken;
            TokenValidationParameters validationParameters = new TokenValidationParameters();

            validationParameters.ValidateLifetime = true;
            validationParameters.ValidAudience = "BiedneStudenty";
            validationParameters.ValidIssuer = "BiedneStudenty";
            validationParameters.IssuerSigningKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(Encoding.UTF8.GetBytes("4976b722-f445-4ec3-89bf-abbb007396d6"));

            ClaimsPrincipal principal = new JwtSecurityTokenHandler().ValidateToken(jwtToken, validationParameters, out validatedToken);


            return principal;
        }
    }
}
