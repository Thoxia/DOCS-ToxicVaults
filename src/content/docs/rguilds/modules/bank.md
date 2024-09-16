---
title: Bank - Guild Bank Module
---

## Guild Bank Module

### What is it?

- The Guild Bank Module allows guild members to deposit money into a shared guild vault and withdraw funds, effectively creating a common guild bank.

### Features

- The guild leader can set which ranks have permission to withdraw money from the guild bank.
- The names of members who deposit or withdraw money from the guild bank are visible.
- PlaceholderAPI support.

### Commands

#### Player Commands

- `/guildbank deposit <amount>` - Deposits a specified amount of money into the guild bank.
- `/guildbank withdraw <amount>` - Withdraws a specified amount of money from the guild bank.
- `/guildbank rank <rank>` - Allows the guild leader to set the rank required to withdraw money from the guild bank.

#### Admin Commands

- `/adminguild deletebank <name>` - Deletes the bank of a specified guild.
- `/adminguild showbalance <name>` - Views the total bank balance of a specified guild.

### PlaceholderAPI

- `%rguilds_balance%` - Displays the balance of the guild bank for the player’s affiliated guild.

### Images

![bank_1](../../../../assets/rguilds/modules/bank/bank_1.png)
![bank_2](../../../../assets/rguilds/modules/bank/bank_2.png)