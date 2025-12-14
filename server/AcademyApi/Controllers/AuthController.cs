using Microsoft.AspNetCore.Mvc;
using AcademyApi.Models;
using AcademyApi.Services;
using AcademyApi.Data;
using Microsoft.EntityFrameworkCore;
using AcademyApi.Dtos;
using Microsoft.AspNetCore.Identity;
namespace AcademyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        // POST api/auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
                return BadRequest("User already exists");

            var user = new User
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                PasswordHash = PasswordHasher.Hash(dto.Password),
                Role = "user"
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("Registered successfully");
        }


        // POST api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null) return Unauthorized("Invalid credentials");

            var hashed = PasswordHasher.Hash(dto.Password);
            if (user.PasswordHash != hashed) return Unauthorized("Invalid credentials");

            HttpContext.Session.SetInt32("UserId", user.Id);

            return Ok("Logged in");
        }

        // POST api/auth/logout
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Ok("Logged out");
        }

        [HttpGet("me")]
        public async Task<IActionResult> Me()
        {
            var userId = HttpContext.Session.GetInt32("UserId");
            if (userId == null) return Ok(null); // или return Unauthorized();

            var user = await _context.Users.AsNoTracking()
                         .Select(u => new { u.Id, u.FirstName, u.LastName, u.Email })
                         .FirstOrDefaultAsync(u => u.Id == userId.Value);

            return Ok(user);
        }
    }

    public class LoginDto
    {
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
