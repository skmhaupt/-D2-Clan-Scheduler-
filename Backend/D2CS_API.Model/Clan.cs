namespace D2CS_API.Model
{
    public class Clan
    {
        public Clan(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public int Id { get; private set; }
        public string Name { get; private set; }
    }
}