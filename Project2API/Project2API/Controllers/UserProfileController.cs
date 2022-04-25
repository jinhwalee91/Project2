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

        [HttpPost]
        [Route("Create/{id}")]
        public IActionResult CreateAccount(int id)
        {

            UserProfile newUser = new UserProfile();
            newUser.AccountId = id;
            newUser.AvatarLink = "https://i.postimg.cc/Gmnz32cT/default.png";
            newUser.UserElo = 1000;
            newUser.Wpm = 0;
            newUser.KeyboardLayout = "QWERTY";


            if (newUser != null)
            {
                dbContext.UserProfiles.Add(newUser);
                dbContext.SaveChanges();
                return Created("", "Account Added Successfully");
            }
            else
                return BadRequest("Something went wrong");

        }


        [HttpPut]
        [Route("UpdateScore")]
        public IActionResult UpdateScore(int userId, int wpm, int elo)
        {
            var user = (from u in dbContext.UserProfiles
                        where u.AccountId == userId
                        select u).SingleOrDefault();

            if (user != null)
            {
                user.Wpm = Convert.ToByte(wpm);
                user.UserElo = elo;
                user.KeyboardLayout = "QWERTY";

                dbContext.Update(user);
                dbContext.SaveChanges();

                return Ok("User score updated");
            }
            else
            {
                return BadRequest("Invalid user ID");
            }
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
