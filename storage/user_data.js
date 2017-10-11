var fs = require("fs");
var logger = require("../logger.js");

udata = require("./user_data.json");

function blankUser() {
	return {hasTriggered: false, dmTriggers: 0, debug: null};
}

var saving = false;
function save() { // TODO figure out how to async
	if (saving) { return; }
	saving = true;
	logger.debug("saving");
	var output = JSON.stringify(udata);
	fs.writeFileSync("./storage/user_data.json", output);
	saving = false;
}

udata.getUser = function(id) {
	var ret = this[id];
	if (ret == undefined) {
		this[id] = blankUser();
		ret = this[id];
	}
	return ret;
};

udata.setUserProperty = function(id, property, value) {
	if (this[id] == undefined) {
		this[id] = blankUser();
	}
	this[id][property] = value;
	save();
};

module.exports = udata;

logger.debug(module.exports.getUser("311598715817426945").debug);
