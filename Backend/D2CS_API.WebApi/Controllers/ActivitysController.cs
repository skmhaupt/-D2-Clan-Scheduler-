using D2CS_API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Text.Json.Serialization;

namespace HttpProgramming.WebApi.Controllers;

// public class test
// {
//     public string Name { get; set; }

//     [JsonConstructor]
//     public test(string name)
//     {
//         Name = name;
//     }

//     public test() { }

// }


[ApiController]
public class ActivitysController : ControllerBase
{
    private readonly ActivitysRepository _activitysRepository;

    public ActivitysController(ActivitysRepository activitysRepository)
    {
        _activitysRepository = activitysRepository;
    }

    [EnableCors("AnotherPolicy")]
    [HttpGet]
    [Route("/Activitys")]
    public async Task<IActionResult> GetActivitys()
    {
        return Ok(_activitysRepository.GetAllActivitys());
    }

    [HttpGet]
    [Route("/Activity/{activityName}")]
    public IActionResult GetActivity(
        [FromRoute] string activityName)
    {
        var activity = _activitysRepository.GetActivity(activityName);

        return activity is null ? NotFound() : Ok(activity);
    }

    [EnableCors("AnotherPolicy")]
    [HttpPost]
    [Route("/Activity")]
    public async Task<IActionResult> PostActivity([FromBody] Activity activity)
    {
        try
        {

            _activitysRepository.test(activity);
            foreach (var act in _activitysRepository.GetAllActivitys())
            {
                System.Console.WriteLine(act.ToString());
                System.Console.WriteLine("-----------------------------------\n");
            }
            // System.Console.WriteLine("-----------------------------------");
            // System.Console.WriteLine("\t  Activity info");
            // System.Console.WriteLine($"Id: {activity.Id}");
            // System.Console.WriteLine($"Type: {activity.Type}");
            // System.Console.WriteLine($"Name: {activity.Name}");
            // System.Console.WriteLine($"Date: {activity.Date}");
            // System.Console.WriteLine("Players:");
            // foreach (var player in activity.Players)
            // {
            //     System.Console.WriteLine($"\t{player.ToString()}");
            // }
            // System.Console.WriteLine("-----------------------------------");
            // var todoItem = new Activity(activity.Id,
            //                             activity.Type,
            //                             activity.Name,
            //                             activity.Date,
            //                             activity.Players);
            return Ok();
        }
        catch (System.Exception e)
        {
            System.Console.WriteLine(e);
            return NotFound();
        }
    }
}