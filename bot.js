// Mostly copied from https://medium.com/@renesansz/tutorial-creating-a-simple-discord-bot-9465a2764dc0

var Discord = require("discord.io");
var auth = require("./auth.json");

var logger = require("./logger");
var handlers = require("./evt_handlers/manager");

// Initialize Discord Bot
var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});
bot.on("ready", function (evt) {
	logger.info("Connected");
	logger.info("Logged in as: ");
	logger.info(bot.username + " - (" + bot.id + ")");
});

handlers.initialize(bot);
