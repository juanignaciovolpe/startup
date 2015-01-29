var app = app || {};
app.Libreria = Backbone.View.extend({
	el: '#app',

	events:{
		'click #crear': 'crearMovie',
		'click #guardar': 'editarMovie',
		
	},

	initialize: function(){
		this.listenTo(app.movies, 'add', this.mostrarMovie);
		this.listenTo(app.movies, 'remove', this.resetMovie);
		this.listenTo(app.movies, 'change', this.resetMovie);
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
		});
		$('#inputTitle').val("");
		$('#inputCover').val("");
		$('#inputDirector').val("");

	},
	editarMovie: function(){
		
		var movie = app.movies.get($('#inputId').val()).set({
			"title": $('#inputTitle').val(),
			"cover": $('#inputCover').val(),
			"director": $('#inputDirector').val(),
		});

		app.movies.get($('#inputId').val()).set({
			"title": $('#inputTitle').val(),
			"cover": $('#inputCover').val(),
			"director": $('#inputDirector').val(),
		}).save();
		console.log(movie);
		

		
		

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
		'click #editar': 'editarMovie',
		'click #eliminar': 'eliminarMovie'
	},

	initialize: function(){
		var self = this;
		app.route.on('route:book', function(){
			self.render();
		});

		app.route.on('route:detalle', function(){
			self.render();
		});

		app.route.on('route:editar', function(){
			self.render();
		})
	},

	render: function(){
		
		if(window.stade === "movie"){

			$('.detalle').hide();
			$('.editar').hide();
			$('.movies').show();
		}else if(window.stade === "detalle"){
			$('.detalle').show();
			$('.editar').hide();
			$('.movies').hide();
			if(this.model.get('id') === window.movieID){
				new app.DetalleMovieView({model: this.model});
			}
		}else if(window.stade === "editar"){
			$('.editar').show();
			$('.detalle').hide();
			$('.movies').hide();
			if(this.model.get('id') === window.movieID){
				new app.EditarMovieView({model: this.model});
			}
		}
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	detalleMovie: function(){
		Backbone.history.navigate('movies/' + this.model.get('id'), {trigger:true});
	},

	editarMovie: function(){
		Backbone.history.navigate('movies/' + this.model.get('id') +'/edit', {trigger:true});
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


app.EditarMovieView = Backbone.View.extend({
	el: '.editar',
	template: _.template($('#tplEditarMovie').html()),

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