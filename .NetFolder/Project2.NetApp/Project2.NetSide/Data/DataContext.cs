using Microsoft.EntityFrameworkCore;

namespace Project2.NetSide.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<loginTable>? loginTables { get; set; }

        public DbSet<userTable>? userTables { get; set; }
    }
}
