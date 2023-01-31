using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ImageServiceAPI.Interfaces;
using ImageServiceAPI.Services;

namespace ImageServiceAPI
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
            services.AddDbContext<ImageContext>(options =>
                 options.UseNpgsql(
                     Configuration.GetConnectionString("DefaultConnection")));

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddControllers();
            services.AddTransient<IImageService, ImageService>();
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                builder => builder
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .SetIsOriginAllowed(origin => true)
                   .AllowCredentials());
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "User Service", Version = "v1" });
            });
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

            //app.UseAuthentication();
            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Shopping Service v1"));
        }
    }
}
