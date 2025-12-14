using System.Collections.Generic;
using System.Threading.Tasks;
using AcademyApi.Models;

namespace AcademyApi.Services
{
    public interface ICourseService
    {
        Task<IEnumerable<Course>> GetAllAsync();
        Task<Course?> GetByIdAsync(int id);
        Task<Course> CreateAsync(Course course);
        Task<bool> DeleteAsync(int id);
        Task<Course?> UpdateAsync(int id, Course updatedCourse);

    }
}
