var Discord = require("discord.io");
var auth = require("./auth.json");

var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});
bot.on("ready", function (evt) {
	bot.sendMessage({to: "311547097470205963", message:
		"Ladies and gentlemen, the moment you've all been waiting for has arrived:\n" +
		"VERSION 1.1 HAS BEEN RELEASED!\n\n" +

		"This version encompasses <@311598715817426945>'s entire original vision for me, and includes:\n" +
		"- BETTER WORD DETECTION! Nobody will be able to escape.\n" +
		"- FIRST-OFFENDER WARNINGS! Everyone will know what not to say.\n" +
		"- SEXY PROFILE IMAGE! Just look at it. So amazing.\n" +
		"- SECRET DEBUG FEATURES! wait what\n\n" +

		"All this, and more! Coming soon to a Discord server near you!"
	})
});