using Microsoft.EntityFrameworkCore;
using AcademyApi.Models;

namespace AcademyApi.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses { get; set; }


    }
}
