var app = app || {};

app.Movie = Backbone.Model.extend({
	initialize: function(){
		console.log('Se ha creado una nueva instancia');

		this.on('change', function(){
			console.log('El modelo ha cambiado');
		});
	},
	defaults: {
		autor: 'Desconocido',
	},
	urlRoot:'/movies',

});

