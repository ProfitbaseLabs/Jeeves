using ImageCMS.DomainModel.Models;
using ImageCMS.DomainModel.Responses;
using ImageCMS.WebApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace ImageCMS.WebApp.Controllers
{
    public class ConfigurationService
    {
        private readonly ImageCMSContext _context;

        public ConfigurationService(ImageCMSContext context)
        {
            _context = context;
        }

        #region Person

        internal async Task<Person> GetPersonAsync(string id)
        {
            return await _context.Person.FindAsync(id);

        }

        internal async Task<PersonResponseMessage> CreatePersonAsync(Person person)
        {
            person.PersonId = Guid.NewGuid().ToString();

            _context.Person.Add(person);

            await _context.SaveChangesAsync();

            var saved = await _context.Person.FindAsync(person.PersonId);

            return new PersonResponseMessage() { Person = saved };
        }

        internal async Task UpdatePersonAsync(string id, Person person)
        {
            _context.Entry(person).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        internal async Task<bool> DeletePersonAsync(string id)
        {
            try
            {
                var person = await _context.Person.FindAsync(id);
                if (person != null)
                {
                    _context.Person.Remove(person);

                    await _context.SaveChangesAsync();
                }
            }
            catch
            {
                throw;
            }

            return false;
        }

        #endregion Person
    }
}
