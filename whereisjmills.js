var Discord = require('discord.js');
var bot = new Discord.Client();

var valid_voice_commands = ['/puffdaddy',
											'/kb',
											'/jmills',
										  '/chuberry'];
var isPlayingVoice = false;

bot.login('MzI5NzE2MDEyOTc3MDk0NjU2.DEXwJw.v_42LRxMJUoUJiU1CfZ2I86mhow');

console.log('------------------J Mills Started------------------')

bot.on('message', (message) => {
	console.log('Received message: "' + message.content + '" from ' + message.author.username + ' --> Responding');

  if(message.content.toLowerCase().indexOf('where') !== -1 && (message.content.toLowerCase().indexOf('jmills') !== -1 || message.content.toLowerCase().indexOf('j mills') !== -1)){
		jMillsSaline(message);
  } else if (message.content === '/kb' || message.content === '/puffdaddy' || message.content === '/jmills' || message.content === '/chuberry'){
		if(!isPlayingVoice){
			playFile(message);
		}
  }
});

function jMillsSaline(message) {
    message.channel.send('Yo boi is back in Saline baybee', {
		tts: true
	});
}

function playFile(message) {
	var file_name = message.content.substring(1);

	if (message.member.voiceChannel) {
		message.member.voiceChannel.join()
    	.then(connection => { // Connection is an instance of VoiceConnection
				const dispatcher = connection.playFile('/mnt/h/whereisjmills/voice_files/' + file_name + '.mp3');  //C:\\Users\\nicke\\DiscordBots\\whereisjmills\\voice_files\\puffdaddy.mp3');
				isPlayingVoice = true;
				dispatcher.setVolume(1);
				console.log('Playing ' + file_name);

				dispatcher.on('end', () => {
					isPlayingVoice = false;
  				connection.disconnect();
				});
    	})
			.catch(console.log);
    } else {
			message.reply('You need to join a voice channel first!');
    }
}

// Useless for now, always returns false (bug)
function isValidVoiceCommand(message) {
	for (var command in valid_voice_commands) {
		if(message.content === command){
			console.log(message.content + (message.content === command));
			return(true);
		}
	}
	console.log("fuck why is it here");
	return(false);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
