using System.ComponentModel.DataAnnotations;

namespace Project2.NetSide
{
    public class userTable
    {

        public int userId { get; set; }
        public int loginId { get; set; }
        public int highscore { get; set; }
        public int letterscore { get; set; }

        public int eloScore { get; set; }

        public loginTable?  loginTable { get; set; }
    }
}
