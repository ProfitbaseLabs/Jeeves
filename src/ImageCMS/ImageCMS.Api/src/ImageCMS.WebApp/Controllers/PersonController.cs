using ImageCMS.DomainModel.Models;
using ImageCMS.DomainModel.Responses;
using ImageCMS.WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ImageCMS.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly ImageCMSContext _context;
        private readonly ConfigurationService _service;

        public PersonController(ImageCMSContext context)
        {
            _context = context;
            _service = new ConfigurationService(_context);
        }

        [HttpGet("{id}")]
        public async Task<Person> GetPerson([FromRoute] string id)
        {
            return await _service.GetPersonAsync(id);
        }

        [HttpPut("{id}")]
        public async Task UpdatePerson([FromRoute] string id, [FromBody] Person person)
        {
            await _service.UpdatePersonAsync(id, person);
        }

        [HttpPost]
        public async Task<PersonResponseMessage> CreatePerson([FromBody] Person person)
        {
            return await _service.CreatePersonAsync(person);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeletePerson([FromRoute] string id)
        {
            return await _service.DeletePersonAsync(id);
        }
    }
}