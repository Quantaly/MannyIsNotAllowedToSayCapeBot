## What's this?
This folder is used by the bot to store data. Obviously, this is liable to change during execution, and I don't really need it backed up to GitHub! Every commit would have little changes here and it would generally be pretty annoying. Instead, the basic structure of all the JSON files here are stored in text files. Take user_data.txt:
```
{
	"<userid>": {
		"hasTriggered": false,
		"debug": null
	}
}
```
Okay so maybe it's changed since I wrote this but we can ignore that. The important part is that user_data.json will have a bunch of fields named by `userid`s, which will have fields inside of them called `hasTriggered` and `debug`.

Makes sense? Good.