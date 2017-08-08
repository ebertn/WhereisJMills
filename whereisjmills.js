var Discord = require('discord.js');
var bot = new Discord.Client();

console.log('------------------J Mills Started------------------')

bot.on('message', (message) => {
    if(message.content.toLowerCase().indexOf('where') !== -1 && (message.content.toLowerCase().indexOf('jmills') || message.content.toLowerCase().indexOf('j mills'))){
      console.log('Received message: "' + message.content + '" from ' + message.author.username + ' --> Responding');
      message.channel.sendMessage('Yo boi is back in Saline baybee', {
        tts: true
      });
    }
});

bot.login('MzI5NzE2MDEyOTc3MDk0NjU2.DEXwJw.v_42LRxMJUoUJiU1CfZ2I86mhow');
