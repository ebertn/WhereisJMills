// File for recieving and acting on reminders from the user.
var Discord = require('discord.js');

// REMINDER FOR MYSELF: MAKE THIS A CLASS

module.exports = {
  isValidRemindMeCommand,
  getNumber,
};

var commandRegex = /RemindMe! (\d+) (seconds?|minutes?|hours?|days?|weeks?|fortnights?|months?|years?)/

//var number = commandRegex.exec()[1];

function isValidRemindMeCommand(message) {
  return commandRegex.test(message.content);
}

function getNumber(message) {
  return commandRegex.exec(message.content);
}
