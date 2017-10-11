info = require("./cape.json");

blacklist = new RegExp("\\b[ck]\\s*[a@]+\\s*p\\s*e", "i");
module.exports = function (message) { blacklist.test(message); }
