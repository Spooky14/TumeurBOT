const Discord = require ('discord.js');
const talkedRecently = new Set();
const fs = require ('fs');
var bot = new Discord.Client();
const token = process.env.token;
bot.login(token);
const { Client, RichEmbed } = require('discord.js');

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


bot.on ('message', message =>{
    if(message.content === 'YouDeadMan')
    message.channel.send("Cette personne te nique voilament");      
});      

bot.on ('message', message =>{
    if(message.content === 'TumeurBot')
    message.channel.send("Oui");      
});

bot.on ('message', message =>{
    if(message.content === 'TumeurBot')
    message.channel.send("**Je me soumet à votre grandeur**");      
});   


bot.on('message', message => {
    if (message.content === '*help') {
      const embed = new RichEmbed()
        .setTitle('Commande')
        .setColor(0xD60000)
        .setDescription('Bonne journée')
      message.channel.send(embed);
    }
  });
