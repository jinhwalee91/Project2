using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project2API.Models.EF;

namespace Project2API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        toptypersDBContext dbContext = new toptypersDBContext();

        [HttpGet]
        [Route("elist")]
        public IActionResult GetLoginList()
        {
            var empList = from e in dbContext.LoginTables
                          select e;
            return Ok(empList);
        }

        [HttpGet]
        [Route("ViewByEmail")]
        public IActionResult GetEmployeeById(string email)
        {


            try
            {
                var emp = (from e in dbContext.LoginTables
                           where e.Email == email
                           select e).SingleOrDefault();

                if (emp != null)
                {
                    return Ok(emp);
                }
                else
                {
                    return NotFound("Email Not found in system");
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
