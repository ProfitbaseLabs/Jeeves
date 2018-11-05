using System;

namespace ImageCMS.DomainModel.Models
{
    public enum Gender
    {
        Male = 0,
        Female = 1
    }

    public class Person
    {
        public string GroupId { get; set; }
        public Guid PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }

    }
}
