using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Connecting.Models;

public class Player
{
    public int ClanId { get; set; }
    public int PlayerId { get; set; }

    [StringLength(26)]
    public string PlayerName { get; set; } = null!;

    /* [StringLength(15)]
    public string RoleInClan { get; set; } = null!;
 */
    public DateTime PlayerJoinedDate { get; set; }


    public ICollection<Player_Activity>? Player_Activities { get; set; } /* = new List<Player_Activity>(); */


    public Clan Clan { get; set; } = null!;
}
