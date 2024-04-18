using System.Text.Json.Serialization;

namespace D2CS_API.Model
{
    public class Player
    {
        [JsonConstructor]
        public Player(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }

        public override string ToString()
        {
            return $"Name: {Name}, Id: {Id}";
        }
    }
}