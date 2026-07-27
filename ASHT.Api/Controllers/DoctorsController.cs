using ASHT.Application.Medical.Doctor.Commands.Create;
using ASHT.Application.Medical.Doctor.Queries.GetDoctorListByQuery;
using ASHT.SharedKarnel.Dto;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ASHT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly APIResponse _apiResponse;
        public DoctorsController(IMediator mediator)
        {
            _mediator = mediator;
            _apiResponse = new APIResponse();
        }

        [HttpPost("AddAsync")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<APIResponse>> AddDoctor(CreateDoctorCommand command)
        {
            try
            {
                if (command == null)
                {
                    return BadRequest();
                }

                var result = await _mediator.Send(command);

                _apiResponse.Data = result;
                _apiResponse.Status = true;
                _apiResponse.StatusCode = HttpStatusCode.OK;
                return Ok(_apiResponse);
            }
            catch (Exception ex)
            {
                // Error-500- Server Error
                _apiResponse.Errors.Add(ex.Message);
                _apiResponse.Status = false;
                _apiResponse.StatusCode = HttpStatusCode.InternalServerError;
                return _apiResponse;
            }

        }

        [HttpGet("GetAllDoctors")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<APIResponse>> GetDoctorsAsync()
        {
            try
            {
                var result = await _mediator.Send(new GetDoctorListQuery());
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
