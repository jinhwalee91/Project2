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
        public IActionResult UpdateScore(int userId, int wpm, int elo, byte a, byte b, byte c, byte d, byte e, byte f, byte g, byte h, byte i, byte j, byte k, byte l, byte m,
                                            byte n, byte o, byte p, byte q, byte r, byte s, byte t, byte u, byte v, byte w, byte x, byte y, byte z)
        {
            var user = (from usr in dbContext.UserProfiles
                        where usr.AccountId == userId
                        select usr).SingleOrDefault();

            if (user != null)
            {
                user.Wpm = Convert.ToByte(wpm);
                user.UserElo = elo;
                user.KeyboardLayout = "QWERTY";

                user.A = a;
                user.B = b;
                user.C = c;
                user.D = d;
                user.E = e;
                user.F = f;
                user.G = g;
                user.H = h;
                user.I = i;
                user.J = j;
                user.K = k;
                user.L = l;
                user.M = m;
                user.N = n;
                user.O = o;
                user.P = p;
                user.Q = q;
                user.R = r;
                user.S = s;
                user.T = t;
                user.U = u;
                user.V = v;
                user.W = w;
                user.X = x;
                user.Y = y;
                user.Z = z;

                dbContext.Update(user);
                dbContext.SaveChanges();

                return Ok("User score updated");
            }
            else
            {
                return BadRequest("Invalid user ID");
            }
        }

        [HttpPut]
        [Route("ChangeAvatar")]
        public IActionResult ChangeAvatar(int userId, string newAvatar)
        {
            var avatar = (from a in dbContext.UserProfiles
                          where a.AccountId == userId 
                          select a).SingleOrDefault();
            if (avatar != null)
            {
                avatar.AvatarLink = newAvatar;
                dbContext.Update(avatar);
                dbContext.SaveChanges();

                //Avatar Profile Changed
                return Ok(true);
            }
            else
            {
                return BadRequest("Something went wrong");
            }
                
        }


        [HttpDelete]
        [Route("RemoveProfile/{id}")]
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
