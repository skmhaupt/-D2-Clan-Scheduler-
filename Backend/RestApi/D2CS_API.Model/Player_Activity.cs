namespace D2CS_API.Model
{
    public class Player_Activity
    {
        public Player_Activity(int playerId, int activityId)
        {
            PlayerId = playerId;
            ActivityId = activityId;
        }

        public int PlayerId { get; private set; }
        public int ActivityId { get; private set; }
    }
}