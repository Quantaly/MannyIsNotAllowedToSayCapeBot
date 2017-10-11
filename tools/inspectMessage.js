info = require("./cape.json");

blacklist = new RegExp("\\b[ck]\\s*[a@]+\\s*p\\s*e", "i");
module.exports = (message) => blacklist.test(message);
