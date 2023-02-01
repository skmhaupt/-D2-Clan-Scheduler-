using System.Text.Json.Serialization;

namespace D2CS_API.Model
{
    public class Activity
    {
        [JsonConstructor]
        public Activity(string id, string type, Player creator, string name, DateTime date, List<Player> players)
        {
            Id = id;
            Type = type;
            Creator = creator;
            Name = name;
            Date = date;
            Players = players;
        }

        public Activity() { }

        public string Id { get; private set; }
        public string Type { get; private set; }
        public Player Creator { get; private set; }
        public string Name { get; private set; }
        public DateTime Date { get; private set; }
        public List<Player> Players { get; private set; }

        private void printPlayers()
        {
            foreach (var player in Players)
            {
                System.Console.WriteLine($"\t{player.ToString()}");
            }
        }

        public override string ToString()
        {
            System.Console.WriteLine($" Id: {Id}\n Type: {Type}\n Creator: {Creator}\n Name: {Name}\n Date: {Date}\n Players:");
            printPlayers();
            return "ok";
        }
    }
}