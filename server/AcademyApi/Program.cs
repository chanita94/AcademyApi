
using AcademyApi.Data;
using Microsoft.EntityFrameworkCore;
using AcademyApi.Services;

namespace AcademyApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<ICourseService, CourseService>();
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddDistributedMemoryCache();
            builder.Services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromHours(2);
                options.Cookie.HttpOnly = true;
            });
            
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactDev",
                    policy => policy
                        .WithOrigins("http://localhost:5173") 
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials()
                );
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("AllowReactDev");
            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseSession();


            app.MapControllers();

            app.Run();
        }
    }
}
