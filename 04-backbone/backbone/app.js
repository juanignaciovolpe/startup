var express = require('express'),
	path 	= require('path'),
	fs   	= require('fs'),
	uuid   	= require('node-uuid');

var app = express(),
	baseDeDatos = fs.readFileSync('./datos.json').toString();

var datos = JSON.parse(baseDeDatos);

app.use(express.static(path.join(__dirname, 'public')));

// Add POST, PUT, DELETE methods to the app
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.methodOverride());

// Pagina de Inicio: http:localhost:4000
app.get('/', function (req,res){
	res.sendfile(__dirname + '/index.html');
});

// API REST

// Mostrar todos los movies
app.get('/movies', function(req,res) {
	res.send(datos);
});

// Mostrar el detalle de un movie
app.get('/movies/:id', function(req,res,next) {
	var dato;

	for ( var i=0; i<datos.length; i++ ) {
		var movie = datos[i];

		if (movie.id === req.params.id) {
			dato = movie;
		}
	}

	if (dato) {
		res.send(dato);
	} else {
		res.statusCode = 500;
		return res.send('No se encuentra el id.');
	}

});

// POST: crear un nuevo movie.
app.post('/movies', function (req, res){
	req.body.id = uuid.v1(4);

	datos.push(req.body);

	res.send(200, {id: req.body.id});
});

// PUT: Actualizar un movie.
app.put('/movies/:id', function (req, res){
	var movie;

	for (var i = datos.length - 1; i >= 0; i--) {
		movie = datos[i];

		if(movie.id === req.params.id){
			datos[i] = req.body;
		}
	}

	res.send(200);
});

// DELETE: Eliminar un movie.
app.delete('/movies/:id', function (req,res) {

	var elementoEliminar;

	for ( var i=0; i<datos.length; i++ ) {
		var movie = datos[i];

		if (movie.id === req.params.id) {
			elementoEliminar = i;
		}
	}

	datos.splice(elementoEliminar, 1);

	res.send(200);
	
});

app.listen(4000);
