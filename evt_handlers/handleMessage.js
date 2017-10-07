logger = require('../logger');

module.exports = function(bot){ return function(user, userID, channelID, message, evt) {
	//if (userID !== "361851304596733962") return; // only manny is not allowed to say cape
	var cid = channelID;
	if (message.toLowerCase().indexOf("cape") !== -1) {
		logger.warn(user + " is talking about capes: " + message);
		bot.deleteMessage({channelID: channelID, messageID: evt.d.id});
	}
}};
