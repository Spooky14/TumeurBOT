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
  .setTitle("Voici les commande :")
  .setDescription("Modération:")
  .addField("*help", "Affiche ca pd")
  .addField("*kick", "Pour éjécté des petit con")
  .setFooter("*help")
  message.channel.sendMessage(help);
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

bot.on('message', message => {
  if(message.content === pr + "clear")
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("❌ Vous n'avez pas la permission.")

  let args = message.content.split(" ").slice(1);

  if(!args[0]) return message.channel.send("❌ Vous devez mettre un nombre valable.")
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:heavy_check_mark: Vous avez suprimé ${args[0]} message.`)
 })


});
