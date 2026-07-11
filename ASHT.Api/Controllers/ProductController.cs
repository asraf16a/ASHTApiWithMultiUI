using ASHT.Application.Inventory.Product.Commands.Create;
using ASHT.SharedKarnel.Dto;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ASHT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly APIResponse _apiResponse;
        public ProductController(IMediator mediator)
        {
            _mediator = mediator;
            _apiResponse = new APIResponse();
        }

        [HttpPost]
        [Route("Add")]
        // api/product/add
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<APIResponse>> Add([FromBody] CreateProductCommand command)
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
    }
}
