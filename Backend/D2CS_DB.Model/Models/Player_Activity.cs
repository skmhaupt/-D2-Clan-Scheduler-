namespace Connecting.Models
{
    public class Player_Activity
    {
        public int Player_ActivityID { get; set; }
        public int ActivityId { get; set; }
        public int PlayerId { get; set; }

        public Activity Activity { get; set; } = null!;
        //public Player? Player { get; set; } = null!;
    }
}