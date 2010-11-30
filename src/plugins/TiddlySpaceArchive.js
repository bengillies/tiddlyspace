/***
|''Name''|TiddlySpaceArchiver|
|''Description''|Archive old revisions of tiddlers to prevent them from being deleted|
|''Version''|0.1.0|
|''Author''|Ben Gillies|
|''Status''|beta|
!Code
***/
//{{{
(function($) {
var ts = config.extensions.tiddlyspace;

//prototype as we want to effect all instances
var twa = config.adaptors.tiddlyweb.prototype;

//we still want this to be available
twa._deleteTiddler = twa.deleteTiddler;

//get the old revisions off the server, put them in the archive bag, then delete
twa.deleteTiddler = function(tiddler, context, userParams, callback) {
	//set the deleteTiddler method of the current instance to actually delete
	this.deleteTiddler = twa._deleteTiddler;
	var archiveBag = "%0_archive".format([ts.currentSpace.name]);

	var from = {
		title: tiddler.title,
		workspace: context.workspace
	};
	var to = {
		title: "%0 [%1]".format([tiddler.title,
			tiddler.modified.formatString("0DD mmm YYYY 0hh:0mm:0ss")]),
		workspace: "bags/%0".format([archiveBag])
	};

	this.moveTiddler(from, to, context, userParams, callback);
}

})(jQuery);
//}}}
