var app = app || {};
app.Libreria = Backbone.View.extend({
	el: '#app',

	events:{
		'click #crear': 'crearMovie',
		
	},

	initialize: function(){
		this.listenTo(app.movies, 'add', this.mostrarMovie);
		this.listenTo(app.movies, 'remove', this.resetMovie);
		app.movies.fetch();
	},

	mostrarMovie: function(modelo) {
		var vista = new app.MostrarMovieView({model:modelo});
		$('.movies').append(vista.render().$el);
		
	},

	crearMovie: function(){
		app.movies.create({
			"title": $('#inputTitle').val(),
			"cover": $('#inputCover').val(),
			"director": $('#inputDirector').val(),
		})
	},


	resetMovie: function(){
		this.$('.movies').html('');
		app.movies.each(this.mostrarMovie, this)
	}
});

app.MostrarMovieView = Backbone.View.extend({
	template: _.template($('#tplMostrarMovie').html()),
	tagName: 'li',
	className: 'list-group-item',

	events: {
		'click #detalle': 'detalleMovie',
		'click #eliminar': 'eliminarMovie'
	},

	initialize: function(){
		var self = this;
		app.route.on('route:book', function(){
			self.render();
		});

		app.route.on('route:detalle', function(){
			self.render();
		})
	},

	render: function(){
		if(window.stade === "movie"){
			$('.detalle').hide();
			$('.movies').show();
		}else if(window.stade === "detalle"){
			$('.detalle').show();
			$('.movies').hide();
			if(this.model.get('id') === window.movieID){
				new app.DetalleMovieView({model: this.model});
			}
		}
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	detalleMovie: function(){
		Backbone.history.navigate('movies/' + this.model.get('id'), {trigger:true});
	},

	eliminarMovie: function(){
		console.log(this.model);
		this.model.destroy();
	}
})

app.DetalleMovieView = Backbone.View.extend({
	el: '.detalle',
	template: _.template($('#tplDetalleMovie').html()),

	events: {
		'click .atrasMovies': 'atrasMovies'
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	},

	atrasMovies: function(){
		Backbone.history.navigate('',{trigger: true});
	}
})