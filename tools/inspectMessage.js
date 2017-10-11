info = require("./cape.json");

function regexpFrom(input) {
	return new RegExp(input.source, input.flags);
}
blacklist = info.blacklist.map(regexpFrom);
whitelist = info.whitelist.map(regexpFrom);

module.exports = function(message) {
	for (i in whitelist) if (whitelist[i].test(message)) return false;
	for (i in blacklist) if (blacklist[i].test(message)) return true;
	return false;
}
