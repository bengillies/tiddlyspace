config.defaultCustomFields = {
	"server.workspace": "recipes/foo_private"
};

config.extensions.ServerSideSavingPlugin = {};

config.extensions.tiddlyweb = {
	host: "",
	status: {
		 "server_host": { scheme: "http", "host": "tiddlyspace.com" }
	},

	getStatus: function(callback) {
		callback(this.status);
	},
	getUserInfo: function(callback) {
		callback({});
	}
};
