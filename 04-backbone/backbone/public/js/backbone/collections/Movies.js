var app = app || {};

var MoviesCollection = Backbone.Collection.extend({
	model: app.Movie,
	// Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Backbone.LocalStorage("movies-backbone"),
});

app.movies = new MoviesCollection();