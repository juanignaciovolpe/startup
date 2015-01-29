var app = app || {};

var rutas = Backbone.Router.extend({
	routes: {
		'': 'book',
		'movies/:id': 'detalle',
		'movies/:id/edit': 'editar'
	},

	detalle: function(id){
		window.movieID = id;
		window.stade = 'detalle'
	},

	editar: function(id){
		window.movieID = id;
		window.stade = 'editar'
	},

	book: function(){
		window.stade = 'movie';
	}
})

app.route = new rutas();


