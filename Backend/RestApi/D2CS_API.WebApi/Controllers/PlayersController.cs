using D2CS_API.Model;
using Microsoft.AspNetCore.Mvc;

namespace HttpProgramming.WebApi.Controllers;

[ApiController]
public class PlayersController : ControllerBase
{
    private readonly PlayersRepository _playersRepository;

    public PlayersController(PlayersRepository playersRepository)
    {
        _playersRepository = playersRepository;
    }

    [HttpGet]
    [Route("/Players")]
    public async Task<IActionResult> GetPlayers()
    {
        return Ok(_playersRepository.GetAllPlayers());
    }

    [HttpGet]
    [Route("/Players/{playerName}")]
    public IActionResult GetPlayer(
        [FromRoute] string playerName)
    {
        var student = _playersRepository.GetPlayer(playerName);

        return student is null ? NotFound() : Ok(student);
    }
}