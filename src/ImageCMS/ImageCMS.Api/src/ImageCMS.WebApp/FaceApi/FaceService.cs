using ImageCMS.DomainModel.Models;
using Microsoft.Azure.CognitiveServices.Vision.Face;
using MSVFM = Microsoft.Azure.CognitiveServices.Vision.Face.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ImageCMS.WebApp.FaceApi
{
    public class FaceService
    {
        const string _subscriptionKey = "TODO: Add Key"; // Key 1 or Key 2 from the Face API, not the subscription id
        const string _faceEndpoint = "https://northeurope.api.cognitive.microsoft.com";
        private FaceClient _faceServiceClient;

        public FaceService()
        {
            _faceServiceClient = new FaceClient(new ApiKeyServiceClientCredentials(_subscriptionKey), new DelegatingHandler[] { });
            _faceServiceClient.Endpoint = _faceEndpoint;
        }

        public async Task<Group> CreateGroupAsync(string groupName)
        {
            try
            {
                // Create a new PersonGroup
                var personGroupId = Guid.NewGuid().ToString();

                await _faceServiceClient.LargePersonGroup.CreateAsync(personGroupId, groupName);

                return new Group() { GroupId = personGroupId, GroupName = groupName };
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        public async Task<MSVFM.Person> CreatePerson(string personGroupId, string firstName, string lastName)
        {
            try
            {
                return await _faceServiceClient.PersonGroupPerson.CreateAsync(
                                    // Id of the PersonGroup that the person belonged to
                                    personGroupId,
                                    // Name of the person
                                    string.Concat(firstName, " ", lastName)
                                );
            }
            catch(Exception ex)
            {
                throw;
            }
        }
    }
}
