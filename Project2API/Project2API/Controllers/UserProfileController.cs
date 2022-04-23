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
            var userList = from e in dbContext.UserProfiles
                          select e;
            return Ok(userList);
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



        [HttpPost]
        [Route("Create")]
        public IActionResult AddAccount(UserProfile newAccount)
        {

            if (newAccount != null)
            {
                dbContext.UserProfiles.Add(newAccount);
                dbContext.SaveChanges();
                return Created("", "Account Added Successfully");
            }
            else
                return BadRequest("Something went wrong");

        }

        [HttpDelete]
        [Route("RemoveProfile")]
        public IActionResult deleteProfile(int id)
        {
            var prof = (from e in dbContext.UserProfiles
                       where e.AccountId == id
                       select e).SingleOrDefault();

            if (prof != null)
            {
                dbContext.UserProfiles.Remove(prof);
                dbContext.SaveChanges();
                //Id was found and deleted
                return Accepted("", true);
            }
            else
            {
                //Id not found
                return NotFound(false);
            }
        }
    }
}
