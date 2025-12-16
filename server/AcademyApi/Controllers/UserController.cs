using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AcademyApi.Models;
using AcademyApi.Services;
using AcademyApi.Data;
using System.Security.Claims;

namespace AcademyApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IUserService _userService;

        public UserController(IUserService userService, AppDbContext context)
        {
            _userService = userService;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAll()
        {
            var users = await _userService.GetAllAsync();
            return Ok(users);
        }



        [Authorize(Roles = "Admin")]
        [HttpDelete("users/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var targetUser = await _context.Users.FindAsync(id);
            if (targetUser == null)
                return NotFound();

            if (targetUser.Role == "Admin")
                return BadRequest("Cannot delete another admin");

            _context.Users.Remove(targetUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
