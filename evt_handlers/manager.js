var handleMessage = require('./handleMessage')

module.exports = {initialize: function(bot){
	bot.on('message', handleMessage(bot));
}}
