using System.ComponentModel.DataAnnotations;

namespace Project2.NetSide
{
    public class loginTable
    {
        public int userId {  get; set; }

        [StringLength(30)]
        public int username {  get; set; }

        [StringLength(30)]
        public int userEmail { get; set; }

        [StringLength(30)]
        public int userPassword { get; set; }
    }
}
