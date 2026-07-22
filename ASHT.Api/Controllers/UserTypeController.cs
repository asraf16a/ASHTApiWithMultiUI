using ASHT.Application.Hrm.UserType.Query;
using ASHT.SharedKarnel.Dto;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ASHT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTypeController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly APIResponse _apiResponse;
        public UserTypeController(IMediator mediator)
        {
            _mediator = mediator;
            _apiResponse = new APIResponse();
        }

        //query to get all users
        [HttpGet("GetAllUserTypeList")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<APIResponse>> GetUsersTypeListAsync()
        {
            try
            {
                var result = await _mediator.Send(new GetAllUserTypeQuery());
                _apiResponse.Data = result;
                _apiResponse.Status = true;
                _apiResponse.StatusCode = HttpStatusCode.OK;

                return Ok(_apiResponse);
            }
            catch (Exception ex)
            {
                _apiResponse.Status = false;
                _apiResponse.StatusCode = HttpStatusCode.InternalServerError;
                _apiResponse.Errors.Add(ex.Message);
                return _apiResponse;
            }
        }
    }
}
