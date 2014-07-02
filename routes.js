var defaultController = require('./controllers/default');

module.exports = function(app){
	app.route('/')
	.get(function(req, res, next){
		
	});

	app.route('/sub/:id')
	.get(defaultController.getOne)
	.post(defaultController.createOne);
}