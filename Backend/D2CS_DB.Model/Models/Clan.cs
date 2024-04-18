using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace Connecting.Models
{
    public class Clan
    {
        public int ClanId { get; set; }

        [StringLength(30)]
        public string ClanName { get; set; } = null!;

        public DateTime ClanJoinedDate { get; set; }


        public ICollection<Player>? Players { get; set;} /* = new List<Player>(); */
        public ICollection<Activity>? Activities { get; set;} /* = new List<Activity>(); */

    }
}