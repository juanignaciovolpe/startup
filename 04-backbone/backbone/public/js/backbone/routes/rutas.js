var app = app || {};

var rutas = Backbone.Router.extend({
	routes: {
		'': 'book',
		'movies/:id': 'detalle'
	},

	detalle: function(id){
		window.movieID = id;
		window.stade = 'detalle'
	},

	book: function(){
		window.stade = 'movie';
	}
})

app.route = new rutas();


