logger = require('../logger');
channels = require('../data/channels.json');

module.exports = function(bot){ return function(user, userID, channelID, message, evt) {
	if (messageIsBad(user, userID, channelID, message, evt)) {
		logger.warn(user + " is talking about capes: " + message);
		bot.deleteMessage({channelID: channelID, messageID: evt.d.id});
	}
}};

function messageIsBad(user, userID, channelID, message, evt) {
	//if (channelID === channels.spirit) return false; // capes are decidedly a spirit thing... but the verdict has already been reached.
	return message.toLowerCase().indexOf("cape") !== -1; // TODO learn how to regex
}