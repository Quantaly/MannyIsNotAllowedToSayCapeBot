// Mostly copied from https://medium.com/@renesansz/tutorial-creating-a-simple-discord-bot-9465a2764dc0

var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
	colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});
bot.on('ready', function (evt) {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(bot.username + ' - (' + bot.id + ')');
});

// TODO move event handlers into own files
bot.on('message', function (user, userID, channelID, message, evt) {
	//if (userID !== "361851304596733962") return; // only manny is not allowed to say cape
	var cid = channelID; // TODO is this necessary, or can I just say "channelID: channelID" later??
	if (message.toLowerCase().indexOf("cape") !== -1) {
		logger.warn(user + " is talking about capes: " + message);
		bot.deleteMessage({channelID: cid, messageID: evt.d.id});
	}
});
