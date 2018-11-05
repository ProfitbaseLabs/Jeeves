using ImageCMS.DomainModel.Models;
using ImageCMS.DomainModel.Responses;
using ImageCMS.WebApp.FaceApi;
using ImageCMS.WebApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImageCMS.WebApp.Controllers
{
    public class ConfigurationService
    {
        private readonly ImageCMSContext _context;
        private readonly FaceService _faceService;

        public ConfigurationService(ImageCMSContext context)
        {
            _context = context;

        }

        #region Person

        internal async Task<List<Person>> GetAllPersons()
        {
            try
            {
                return await Task.Run(() => _context.Person.Select(item => item).ToList());
            }
            catch
            {
                throw;
            }
        }

        internal async Task<Person> GetPersonAsync(string id)
        {
            try
            {
                return await _context.Person.FindAsync(id);
            }
            catch
            {
                throw;
            }
        }

        internal async Task<PersonResponseMessage> CreatePersonAsync(Person person)
        {
            try
            {
                var msfvmPerson = await _faceService.CreatePerson(person.GroupId, person.FirstName, person.LastName);
                person.PersonId = msfvmPerson.PersonId;

                _context.Person.Add(person);

                await _context.SaveChangesAsync();

                var saved = await _context.Person.FindAsync(person.PersonId);

                return new PersonResponseMessage() { Person = saved };
            }
            catch(Exception ex)
            {
                throw ex;
            }
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

        #region Group

        internal async Task<Group> GetGroupAsync(string id)
        {
            try
            {
                return await _context.Group.FindAsync(id);
            }
            catch
            {
                throw;
            }
        }

        internal async Task<GroupResponseMessage> CreateGroupAsync(Group group)
        {
            try
            {
                group.GroupId = Guid.NewGuid().ToString();
                _context.Group.Add(group);
                await _context.SaveChangesAsync();
                var saved = await _context.Group.FindAsync(group.GroupId);
                return new GroupResponseMessage() { Group = saved };
            }
            catch
            {
                throw;
            }
        }

        internal async Task UpdateGroupAsync(string id, Group group)
        {
            _context.Entry(group).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        internal async Task<bool> DeleteGroupAsync(string id)
        {
            try
            {
                var group = await _context.Group.FindAsync(id);
                if (group != null)
                {
                    _context.Group.Remove(group);
                }
            }
            catch
            {
                throw;
            }
            return false;
        }

        #endregion Group
    }
}
