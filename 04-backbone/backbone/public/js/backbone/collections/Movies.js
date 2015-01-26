var app = app || {};

var MoviesCollection = Backbone.Collection.extend({
	model: app.Movie,

	url:'/movies'
});

app.movies = new MoviesCollection();