using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using AcademyApi.Models;
using AcademyApi.Services;
using AcademyApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace AcademyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController: ControllerBase
    {
        private readonly ICourseService _courseService;
        private readonly AppDbContext _context;

        public CourseController(ICourseService courseService, AppDbContext context)
        {
            _courseService = courseService;
            _context = context;
        }

        // GET: api/course
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetAll()
        {
            var courses = await _courseService.GetAllAsync();
            return Ok(courses);
        }

        // GET: api/course/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetById(int id)
        {
            var course = await _courseService.GetByIdAsync(id);
            if (course == null) return NotFound();
            return Ok(course);
        }

        // POST: api/course
        
[Authorize]
[HttpPost]
public async Task<ActionResult<Course>> Create(Course course)
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

    if (userId == null)
        return Unauthorized();

    var created = await _courseService.CreateAsync(course);
    return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
}


        // DELETE: api/course/5
[Authorize]
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

    if (userId == null)
        return Unauthorized();

    var deleted = await _courseService.DeleteAsync(id);
    if (!deleted) return NotFound();

    return NoContent();
}

        [Authorize]
[HttpPut("{id}")]
public async Task<IActionResult> Update(int id, Course updatedCourse)
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

    if (userId == null)
        return Unauthorized();

    var result = await _courseService.UpdateAsync(id, updatedCourse);
    if (result == null) return NotFound();

    return Ok(result);
}

    }
}

