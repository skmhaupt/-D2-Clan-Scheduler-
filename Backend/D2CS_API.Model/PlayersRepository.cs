namespace D2CS_API.Model
{
    public class PlayersRepository
    {
        //private readonly IEnumerable<>
        private readonly ICollection<Player> _players;

        public PlayersRepository(int numberOfPlayers)
        {
            _players = Enumerable
                .Range(0, numberOfPlayers)
                .Select(index => new Player(
                    id: index,
                    name: $"Pyoma{index}"
                ))
                .ToList();
        }

        public IEnumerable<Player> GetAllPlayers()
        {
            return _players;
        }

        public Player? GetPlayer(string name)
        {
            return _players.FirstOrDefault(player => player.Name == name);
        }
    }
}