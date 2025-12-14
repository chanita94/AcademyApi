using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AcademyApi.Data;
using AcademyApi.Models;

namespace AcademyApi.Services
{
    public class CourseService : ICourseService
    {
        private readonly AppDbContext _context;

        public CourseService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Course>> GetAllAsync()
        {
            return await _context.Courses.AsNoTracking().ToListAsync();
        }

        public async Task<Course?> GetByIdAsync(int id)
        {
            return await _context.Courses.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Course> CreateAsync(Course course)
        {
            _context.Courses.Add(course);
            await _context.SaveChangesAsync();
            return course;
        }
        public async Task<bool> DeleteAsync(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null) return false;

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<Course?> UpdateAsync(int id, Course updatedCourse)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null) return null;

            course.Title = updatedCourse.Title;
            course.Description = updatedCourse.Description;

            await _context.SaveChangesAsync();
            return course;
        }

    }
}

