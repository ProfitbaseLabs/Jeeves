using ImageCMS.DomainModel.Models;
using Microsoft.EntityFrameworkCore;

namespace ImageCMS.WebApp.Models
{
    public class ImageCMSContext : DbContext
    {
        public ImageCMSContext (DbContextOptions<ImageCMSContext> options)
            : base(options)
        {
        }

        public DbSet<Person> Person { get; set; }
        public DbSet<Group> Group { get; set; }
    }
}
