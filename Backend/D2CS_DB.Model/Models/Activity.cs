using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace Connecting.Models
{
    public enum ActivityType
    {
        Raids, Dungeons, Crucible, Vanguard, Gambit
    }

    public class Activity
    {
        public int ActivityId { get; set; }
        
        public int ClanId { get; set; }

        [StringLength(30)]
        public ActivityType ActivityType { get; set; }

        [StringLength(30)]
        public string ActivityName { get; set; } = null!;

        public DateTime CreationDate { get; set; }

        public DateTime ActivityDate { get; set; }

        [StringLength(26)]
        public string Creator { get; set; } = null!;


        public ICollection<Player_Activity>? Player_Activities { get; set;}/*  = new List<Player_Activity>(); */

        public Clan Clan { get; set; } = null!;
    }
}