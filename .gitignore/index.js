const Discord = require ('discord.js');
const talkedRecently = new Set();
const fs = require ('fs');
var bot = new Discord.Client();
const token = process.env.token;
bot.login(token);


bot.on('ready',() => {
    console.log('Bot Started!')
    bot.user.setStatus('dnd')
    bot.user.setActivity('🌍 Faire chier la commu 🔫')
})


bot.on('message', message => {
  if (!message.guild) return;
if (message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS"))
  if (message.content.startsWith('*kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick().then(() => {
          message.channel.send(`✔️${user.tag} a bien été éjécté.`);
        }).catch(err => {
          message.channel.send('❌ Tu ne peut pas éjécté cette personne.');
          console.error(err);
        });
      } else {
        message.channel.send('❌ Cette personne ne peut etre éjécté');
      }
    } else {
      message.channel.send('❌ Il faut mentionner une personne.');
    }
  }
});

bot.on('message', message => {
  if (!message.guild) return;
if (message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS"))
  if (message.content.startsWith('*ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban().then(() => {
          message.channel.send(`✔️${user.tag} a bien été banni.`);
        }).catch(err => {
          message.channel.send('❌ Tu ne peut pas bannir cette personne.');
          console.error(err);
        });
      } else {
        message.channel.send('❌ Cette personne ne peut etre banni');
      }
    } else {
      message.channel.send('❌ Il faut mentionner une personne.');
    }
  }
});

bot.on('message', message => {
  if (message.content.startsWith('*ping'))
  message.channel.send(':ping_pong:Pong!  + ${msg.createdTimestamp - message.createdTimestamp} + ms +  API Latency  + ${client.ping}` + ms');
})

exports.run = (client, message, args) => {
    if (args.join(" ") == "") {
        message.reply("you need mention a user for this command! Syntax: !avatar @USER");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("#5100ff") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
}
