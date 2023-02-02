using Microsoft.EntityFrameworkCore;
using Connecting.Models;

namespace Connecting.Data
{
    public class D2csContext : DbContext
    {

        // public D2csContext(DbContextOptions<D2csContext> options) : base(options)
        // {
        // }

        public virtual DbSet<Clan> Clans { get; set; } = null!;

        public virtual DbSet<Activity> Activities { get; set; } = null!;

        public virtual DbSet<Player> Players { get; set; } = null!;

        public virtual DbSet<Player_Activity> Players_Activities { get; set; } = null!;

         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=SEBS_LAPTOP\\SQLEXPRESS;Database=D2CS;Trusted_Connection=True;Trust Server Certificate=true;");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Clan>().ToTable("Clan");
            modelBuilder.Entity<Activity>().ToTable("Activity");
            modelBuilder.Entity<Player>().ToTable("Player");
            modelBuilder.Entity<Player_Activity>().ToTable("Player_Activity");      // <-- Have to change and probably implement manualy
        }



        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Clan>(entity =>
            {
                entity.HasKey(e => e.ClanId);

                entity.Property(e => e.ClanId)
                    .HasColumnType("int")
                    .HasColumnName("clanId")
                    .UseIdentityColumn(1, 1);
                entity.Property(e => e.ClanName)
                    .HasMaxLength(50)
                    .HasColumnName("clanName")
                    .IsRequired();
                entity.Property(e => e.ClanJoinedDate)
                    .HasColumnType("date")
                    .HasColumnName("clanJoinedDate");
            });

            modelBuilder.Entity<Player>(entity =>
            {
                entity.HasKey(e => e.ClanId);
                entity.HasKey(e => e.PlayerId);

                entity.Property(e => e.ClanId)
                    .HasColumnType("int")
                    .HasColumnName("clanId");
                entity.Property(e => e.PlayerId)
                    .HasColumnType("int")
                    .HasColumnName("playerId")
                    .UseIdentityColumn(1, 1);
                entity.Property(e => e.PlayerName)
                    .HasMaxLength(26)
                    .HasColumnName("playerName")
                    .IsRequired();
                entity.Property(e => e.RoleInClan)
                    .HasMaxLength(15)
                    .HasColumnName("roleInClan")
                    .IsRequired();
                entity.Property(e => e.PlayerJoinedDate)
                    .HasColumnType("date")
                    .HasColumnName("playerJoinedDate")
                    .IsRequired();

                entity.HasOne(d => d.ClanNameNavigation).WithMany(p => p.Player)
                    .HasForeignKey(d => d.ClanId)
                    .HasConstraintName("FK_Player_to_Clan");
            });

            modelBuilder.Entity<Activity>(entity =>
            {
                entity.HasKey(e => e.ClanId);
                entity.HasKey(e => e.ActivityId);

                entity.Property(e => e.ClanId)
                    .HasColumnType("int")
                    .HasColumnName("clanId");
                entity.Property(e => e.ActivityId)
                    .HasColumnType("int")
                    .HasColumnName("activityId");
                entity.Property(e => e.ActivityType)
                    .HasMaxLength(50)
                    .HasColumnName("activityType")
                    .IsRequired();
                entity.Property(e => e.ActivityName)
                    .HasMaxLength(30)
                    .IsRequired();
                entity.Property(e => e.CreationDate)
                    .HasColumnType("date")
                    .HasColumnName("creationDate")
                    .IsRequired();
                entity.Property(e => e.ActivityDate)
                    .HasColumnType("date")
                    .HasColumnName("activityDate")
                    .IsRequired();
                entity.Property(e => e.Creator)
                    .HasMaxLength(26)
                    .HasColumnName("playerName")
                    .IsRequired();

                entity.HasOne(d => d.ClanNameNavigation).WithMany(p => p.Activity)
                    .HasForeignKey(d => d.ClanId)
                    .HasConstraintName("FK_Activity_to_Clan");
            });

            modelBuilder.Entity<Player_Activity>(entity =>
            {
                entity.HasKey(e => e.ActivityId);
                entity.HasKey(e => e.PlayerId);

                entity.Property(e => e.ActivityId)
                    .HasColumnType("int")
                    .HasColumnName("activityId");
                entity.Property(e => e.PlayerId)
                    .HasColumnType("int")
                    .HasColumnName("playerId");


                entity.HasOne(d => d.ActivityIdNavigation).WithMany(p => p.Player_Activities)
                    .HasForeignKey(d => d.ActivityId)
                    .HasConstraintName("FK_PlayAct_to_Activity");

                entity.HasOne(d => d.PlayerIdNavigation).WithMany(p => p.Player_Activities)
                    .HasForeignKey(d => d.ActivityId)
                    .HasConstraintName("FK_PlayAct_to_Player");
            });

            //OnModelCreatingPartial(modelBuilder);
            base.OnModelCreating(modelBuilder);
        } */
        //partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}