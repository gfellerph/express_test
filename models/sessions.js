var cookieParser = require('cookie-parser');
var Datastore = require('nedb')
  , db = new Datastore({ filename: './datafile', autoload: true });

module.exports = {
	getSession: function(req, res, next){
		res.write('hi\n');
		res.write('IP: ' + req.ip);
		res.end();
		return next();
	},
	setSession: function(req, res, next){
		set(req, function(){
			return next();
		});
	}
}

function set(req, callback){
	var session = req.session || {};
	session.lastVisit = new Date;
    session.ip = req.ip;
    db.insert(session, callback);
}