using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Data.Models;

namespace UserServiceAPI
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<UserContext>(options =>
                 options.UseNpgsql(
                     Configuration.GetConnectionString("DefaultConnection")));

            services
               .AddIdentity<User, IdentityRole>(opt =>
               {
                   //opt.Lockout.AllowedForNewUsers = false;
                   //opt.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%^&*()-._@+";
               })
               .AddSignInManager<SignInManager<User>>()
               .AddEntityFrameworkStores<UserContext>()
               .AddDefaultTokenProviders();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("CorsPolicy");

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            ////app.UseSwagger();
            //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Funtest v1"));
        }
    }
}
