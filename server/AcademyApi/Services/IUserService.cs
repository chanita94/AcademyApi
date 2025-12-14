using AcademyApi.Models;

namespace AcademyApi.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllAsync();
        Task<User?> GetByIdAsync(int id);
        Task<User> CreateAsync(User user);
        Task<bool> DeleteAsync(int id);
    }
}
