using System;

namespace ImageCMS.DomainModel.Models
{
    public enum Gender
    {
        Male,
        Female
    }

    public class Person
    {
        public string GroupId { get; set; }
        public string PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }

    }
}
