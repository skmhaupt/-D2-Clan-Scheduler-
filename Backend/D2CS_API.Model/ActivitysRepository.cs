namespace D2CS_API.Model
{
    public class ActivitysRepository
    {
        //private readonly IEnumerable<>
        private readonly ICollection<Activity> _activitys;
        public ActivitysRepository(int numberOfPlayers)
        {
            Player testCreator = new Player(65490646, "test");

            List<Player> players = new List<Player>();
            players.Add(new Player(0, "Doom"));
            players.Add(new Player(1, "Monkey"));
            players.Add(new Player(2, "Pyoma"));

            DateTime date = new DateTime(2023, 3, 1, 7, 0, 0);

            _activitys = Enumerable
                .Range(0, numberOfPlayers)
                .Select(index => new Activity(
                    id: $"{index}",
                    type: $"Gambit",
                    creator: testCreator,
                    name: $"Gambit{index}",
                    date: date,
                    players: players
                ))
                .ToList();
        }

        public void test(Activity activity)
        {
            _activitys.Add(activity);
        }

        public IEnumerable<Activity> GetAllActivitys()
        {
            return _activitys;
        }

        public Activity? GetActivity(string name)
        {
            return _activitys.FirstOrDefault(activity => activity.Name == name);
        }
    }
}