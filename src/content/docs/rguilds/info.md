---
title: "information"
---

## RGuilds - Advanced Guild Plugin

- Add a unique twist to your server by giving players the chance to create their own guilds!

### Features
- Fully customizable settings and messages.
- Set a fee for creating a guild:
  - Supports Vault, PlayerPoints, or even free options.
- PlaceholderAPI Support:
  - Includes a wide variety of placeholders within the plugin!
- Guild Ranking System:
  - Three ranks available within a guild: Leader, Moderator, and Member.
- Cross Server Support:
  - Fully supports multi-server setups with Redis!
  - Players can invite each other, send messages across servers, and more.
- Module Support:
  - Optional (paid or free) modules available within the plugin.
- GUI Support:
  - Many aspects of the plugin are integrated with GUI interfaces.
  - Offer your players a visually appealing and user-friendly experience.
  - Supports custom-model-data!
- Storage:
  - Supports both SQLite and MySQL.
- Guild Name Change:
  - Supports Turkish characters and spaces.
  - Automatically blocks special characters and punctuation marks.
- Guild PvP System:
  - Members can engage in PvP within the guild if the leader permits it.
- Guild War System:
  - Guild leaders can declare war on each other, and players can see which guilds are enemies.
- Guild Level System:
  - Includes a leveling and XP system within the guild. Unlimited levels can be set.
  - You can customize how many points are awarded for killing any entity or player.
  - Set member limits for each level.
- Guild Banner System:
  - Guild leaders can choose a banner for their guild, which enemies can see.
- Discord Webhook Support:
  - Send a Discord webhook when a guild war is started or ended.
- Participation with code
  - The guild leader can create a code for his guild and allow players to join with this code.
- Customizable Moderator powers
  - The guild leader can authorize the guild moderators as they wish (invitation, pvp, war, etc.)


## GUI design preview

[Preview Video](https://www.youtube.com/watch?v=hsbzZDGteXI)

### Dependencies

- RozsLib - A mandatory library required for the plugin to function!
- Vault - The main plugin for economy (optional).
- PlaceholderAPI - Required for RozsLib and the placeholder system within the plugin.

### Commands

**Player Commands**

`/guild create <name>` - Creates a guild.  
`/guild accept <player>` - Joins the guild of the player who sent the invite.  
`/guild invite <player>` - Sends an invite to a player.  
`/guild leave` - Leaves the current guild.  
`/guild kick <player>` - Kicks a player from the guild.  
`/guild message <message>` - Sends a message to all guild members.  
`/guild rename <name>` - Updates the guild's name.  
`/guild war start/end <name>` - Starts or ends a war with another guild.  
`/guildwar banner` - Sets the held banner as the guild's banner.
`/guildwar join <code>` - Join a guild with the specified code.

**Admin Commands**

`/adminclaim delete <guildname>` - Deletes a guild.  
`/adminclaim show <guildname>` - Displays guild information.  
`/adminclaim forceleave <player>` - Forces a player to leave their guild.  
`/adminclaim list` - Displays a list of all guilds.  
`/adminclaim level set <level> <guild>` - Sets the level of a guild.  
`/adminguild exp give <amount> <guild>` - Gives XP to a guild.  
`/adminguild exp take <amount> <guild>` - Takes XP from a guild.

### Permissions

`rguilds.admin` - Basic admin permission.  
`rguilds.admin.delete` - Required to delete a guild.  
`rguilds.admin.show` - Required to view guild information.  
`rguilds.admin.forceleave` - Required to force a player out of a guild.  
`rguilds.admin.list` - Required to view the list of guilds.  
`rguilds.admin.level` - Required for guild level commands.  
`rguilds.admin.exp` - Required for guild XP commands.

### PlaceholderAPI

`%rguilds_formatted_name%` - Guild name (colored and starred)  
`%rguilds_unformatted_name%` - Guild name (colored and unstarred)  
`%rguilds_formatted_name_no_color%` - Guild name (no color, but starred)  
`%rguilds_unformatted_name_no_color%` - Guild name (no color, no stars)  
`%rguilds_kill_count%` - Guild kill count  
`%rguilds_level%` - Guild level display name  
`%rguilds_xp%` - Guild experience points  
`%rguilds_next_xp%` - Experience points needed for the next level  
`%rguilds_next_level_unformatted%` - Unformatted next level name  
`%rguilds_next_level_formatted%` - Display name for the next level  
`%rguilds_top_xp_<number>_<name/point>%` - Guilds ranked by XP  
`%rguilds_top_kill_<number>_<name/point>%` - Guilds ranked by kills  
`%rguilds_kill_count_<guild>%` - Shows a guild's kill count  
`%rguilds_xp_<guild>%` - Shows a guild's experience points  
`%rguilds_level_<guild>%` - Shows the display name of a guild's level  
`%rguilds_level_unformatted_<guild>%` - Shows the unformatted name of a guild's level  
