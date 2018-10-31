const Discord = require ('discord.js')

var bot = new Discord.Client();

var pr = "*";

bot.login('NTA3MTI4MzkzMTAwMjk2MTky.DrsNVw.ipsr1gP5pxgN_GdBnGdqIwqjF1g');


bot.on('ready',() => {
    console.log('Je suis Good!')
    bot.user.setStatus('online')
    bot.user.setActivity('🔫Niquer des Maman👩‍')
})

bot.on('message', message => {
  if (message.content === 'Malediction') {
    message.channel.send('A vos ordre monsieur 😐')
  }
});

bot.on('message', message => {
  if(message.content === pr + "help"){
    var helpd = new Discord.RichEmbed()
    .setColor("#96003d")
    .setTitle(":white_check_mark: Les commande ton été envoyer en mp")
    message.reply(helpd);
  }});

bot.on('message', message => {
if(message.content === pr + "help"){
  var help = new Discord.RichEmbed()
  .setColor("#96003D")
  .setImage(`${bot.displayAvatarURL}`)
  .setAuthor("Help")
  .setTitle("Voici mes commande:")
  .setDescription("Modération:")
  .addField("*ban", "Pour bannir des gros con")
  .addField("*kick", "Pour éjécté des petit con")
  .setFooter("*help")
  .setTimestamp()
  message.author.sendMessage(help);
}});


bot.on('message', message => {
  if(message.content === pr + "whois"){
    var whois = new Discord.RichEmbed()
    .setColor("#96003d")
    .setTitle(":negative_squared_cross_mark: Actuellement en développement")
    .setFooter("*whois")
    .setTimestamp()
    message.reply(whois);
  }});
