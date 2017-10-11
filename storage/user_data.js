var fs = require("fs");

udata = require("./user_data.json"); // for some reason this doesn't read the new version?

function blankUser() {
	return {hasTriggered: false, dmTriggers: 0, debug: null};
}

var saving = false;
function save() { // TODO figure out how to async
	if (saving) { return; }
	saving = true;
	var output = JSON.stringify(udata);
	fs.writeFileSync("./storage/user_data.json", output, "utf-8");
	saving = false;
}

module.exports = {
	getUser: function(id) {
		var ret = udata[id];
		if (ret == undefined) {
			udata[id] = blankUser();
			ret = udata[id];
		}
		return ret;
	},
	setUserProperty: function(id, property, value) {
		if (udata[id] == undefined) {
			udata[id] = blankUser();
		}
		udata[id][property] = value;
		save();
	}
}
