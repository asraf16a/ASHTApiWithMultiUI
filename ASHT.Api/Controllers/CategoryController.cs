using ASHT.Application.Inventory.Category.Commands.Create;
using ASHT.Application.Inventory.Category.Queries.GetAllCategory;
using ASHT.SharedKarnel.Dto;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ASHT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly APIResponse _apiResponse;
        public CategoryController(IMediator mediator)
        {
            _mediator = mediator;
            _apiResponse = new APIResponse();
        }

        [HttpPost]
        [Route("AddAsync")]
        // api/category/add
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<APIResponse>> Add([FromBody] CreateCategoryCommand command)
        {
            try
            {
                //Bad-Request-400
                if (command == null)
                {
                    return BadRequest();
                }
                var product = await _mediator.Send(command);


                _apiResponse.Data = product;
                _apiResponse.Status = true;
                _apiResponse.StatusCode = HttpStatusCode.OK;

                // Ok-200- success
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

        //query to get all categories
        [HttpGet("GetAllCategoryList")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<APIResponse>> GetAllCategoryListAsync()
        {
            try
            {
                var result = await _mediator.Send(new GetAllCategoryQuery());
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
