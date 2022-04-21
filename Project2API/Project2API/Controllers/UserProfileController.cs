using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project2API.Models.EF;

namespace Project2API.Controllers
{
    public class UserProfileController : Controller
    {
        toptypersDBContext dbContext = new toptypersDBContext();

        [HttpGet]
        [Route("UserList")]
        public IActionResult GetLoginList()
        {
            var empList = from e in dbContext.UserProfiles
                          select e;
            return Ok(empList);
        }


        [HttpGet]
        [Route("ViewById")]
        public IActionResult GetUserById(int id)
        {


            try
            {
                var emp = (from e in dbContext.UserProfiles
                           where e.AccountId == id
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
