using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImageCMS.DomainModel.Models;
using ImageCMS.DomainModel.Responses;
using ImageCMS.WebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ImageCMS.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupController : ControllerBase
    {
        private readonly ImageCMSContext _context;
        private readonly ConfigurationService _service;

        public GroupController(ImageCMSContext context)
        {
            _context = context;
            _service = new ConfigurationService(_context);
        }

        [HttpGet("{id}")]
        public async Task<Group> GetGroup([FromRoute] string id)
        {
            return await _service.GetGroupAsync(id);
        }

        [HttpPut("{id}")]
        public async Task UpdateGroup([FromRoute] string id, [FromBody] Group group)
        {
            await _service.UpdateGroupAsync(id, group);
        }

        [HttpPost]
        public async Task<GroupResponseMessage> CreateGroup([FromBody] Group group)
        {
            return await _service.CreateGroupAsync(group);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeletePerson([FromRoute] string id)
        {
            return await _service.DeleteGroupAsync(id);
        }
    }
}