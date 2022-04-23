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
        public IActionResult GetLoginByEmail(string email)
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

        [HttpGet]
        [Route("login/{email}/{password}")]
        public IActionResult GetLoginByEmailPassword(string email, string password)
        {

            try
            {

                //@ApiModelProperty(hidden = "true");
                //var login = (from l in dbContext.LoginTables where l.Email == email && l.AccountPassword == password select l).SingleOrDefault();
                int credential = (from z in dbContext.LoginTables where z.Email == email && z.AccountPassword == password select z).Count();
                if (credential == 1)
                {
                    //Login Correct
                    return Ok(true);
                }
                else
                {
                    //Login Incorrect
                    return NoContent();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        #region HTTP Put Using Object
        //[HttpPut]
        //[Route("ChangeName")]
        //public IActionResult ChangeName(LoginTable newName)
        //{
        //    try
        //    {
        //        var account = (from a in dbContext.LoginTables
        //                       where a.Email == newName.Email
        //                       select a).SingleOrDefault();

        //        if(account != null)
        //        {
        //            account.FirstName = newName.FirstName;
        //            account.LastName = newName.LastName;
        //            dbContext.SaveChanges();
        //            return Ok("Updated Name");
        //        }
        //        else
        //        {
        //            return Ok("Not Found / Error"); 
        //        }
        //    }
        //    catch(Exception ex)
        //    {
        //        throw new Exception(ex.Message);
        //    }

        //}
        #endregion

        [HttpPut]
        [Route("ChangeName")]
        public IActionResult ChangeName(string email, string newFirstName, string newLastName)
        {
            try
            {
                var account = (from a in dbContext.LoginTables
                               where a.Email == email
                               select a).SingleOrDefault();

                if (account != null)
                {
                    account.FirstName = newFirstName;
                    account.LastName = newLastName;
                    dbContext.SaveChanges();
                    //return Ok("Updated Name");
                    return Ok(true);
                }
                else
                {
                    //return Ok("Not Found / Error");
                    return Ok(false);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        [HttpPut]
        [Route("ChangePassword")]
        public IActionResult ChangePassword(string email, string oldPassword, string newPassword)
        {
            try
            {
                var account = (from a in dbContext.LoginTables
                               where a.Email == email && a.AccountPassword == oldPassword
                               select a).SingleOrDefault();

                if (account != null)
                {
                    account.AccountPassword = newPassword;

                    dbContext.SaveChanges();
                    return Ok("Updated Password");
                }
                else
                {
                    return Ok("Not Found / Error");
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }


        //[HttpPost]
        //[Route("CreateLogin")]
        //public IActionResult AddLogin(LoginTable newLogin)
        //{
          
        //    if (newLogin != null)
        //    {
              
        //        dbContext.LoginTables.Add(newLogin);
        //        dbContext.SaveChanges();
        //        return Created("", "Login Added Successfully");
        //    }
        //    else
        //        return BadRequest("Something went wrng");

        //}



        [HttpPost]
        [Route("CreateLogin")]
        public IActionResult AddLogin(string firstName, string lastName, string email, string password, string gender)
        {

            LoginTable newLogin = new LoginTable();
            newLogin.FirstName = firstName;
            newLogin.LastName = lastName;
            newLogin.Email = email;
            newLogin.AccountPassword = password;
            newLogin.Gender = gender;

            if (newLogin != null)
            {
                dbContext.LoginTables.Add(newLogin);
                dbContext.SaveChanges();
                return Created("", "Login Added Successfully");
            }
            {
                return Ok("Not Found / Error");
            }
        }

        [HttpGet]
        [Route("AdminCheck")]
        public IActionResult CheckAdmin(string email)
        {
            try
            {
                var admin = (from a in dbContext.LoginTables
                               where a.Email == email && a.IsAdmin == true
                               select a).SingleOrDefault();

                if (admin != null)
                {

                    dbContext.SaveChanges();
                    //Is  A Valid Admin
                    return Ok(true);
                }
                else
                {
                    //Not admin
                    return Ok(false);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        }
}