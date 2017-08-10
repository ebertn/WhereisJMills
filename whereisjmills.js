var Discord = require('discord.js');
var bot = new Discord.Client();
			
bot.login('MzI5NzE2MDEyOTc3MDk0NjU2.DEXwJw.v_42LRxMJUoUJiU1CfZ2I86mhow');

console.log('------------------J Mills Started------------------')

bot.on('message', (message) => {
	console.log('Received message: "' + message.content + '" from ' + message.author.username + ' --> Responding');

    if(message.content.toLowerCase().indexOf('where') !== -1 && (message.content.toLowerCase().indexOf('jmills') !== -1 || message.content.toLowerCase().indexOf('j mills') !== -1)){
		jMillsSaline(message);
    } else if (message.content === "/puffdaddy"){
		puffDaddy(message);
    }
});

function jMillsSaline(message) {
    message.channel.send('Yo boi is back in Saline baybee', {
		tts: true
	});
}

function puffDaddy(message) {
	if (message.member.voiceChannel) {
		message.member.voiceChannel.join()
        	.then(connection => { // Connection is an instance of VoiceConnection
				const dispatcher = connection.playFile('C:\Users\nicke\DiscordBots\whereisjmills\voice_files\puffdaddy.mp3');
				dispatcher.setVolume(1);
				console.log('Played');
        	})
			.catch(console.log);
		 
		dispatcher.on('error', e => {
  			// Catch any errors that may arise
  			console.log(e);
		});	
    } else {
		message.reply('You need to join a voice channel first!');
    }	
}
