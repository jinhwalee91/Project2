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
    }
}
