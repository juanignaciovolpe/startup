
 var Director = require('./director.js');

 var $ = require('./jquery.js'); 

 function Movie (Name, Year) {
            this.name = Name;
            this.year = Year;
            this.director = '';
                      
            
      }   
      Movie.prototype = {
          constructor: Movie,
          play:function ()  {
              console.log('Reproduciendo: ' + this.name + ' del año ' + this.year);
          },
          stop:function ()  {
              console.log(this.name + ' del año ' + this.year + ' se ha detenido');
          },
                   setName:function (name)  {
              this.name = name
          },
          setYear:function (year)  {
              this.year = years
          },
          getName:function ()  {
              return this.name;
          },
          getYear:function ()  {
              return this.year;
          },
          getDirector:function ()  {
              return this.director;
          },
          setDirector:function (director)  {
              this.director = director;
          }
      };

var alien = new Movie('Alien', 2000);
var ridleyScott = new Director('Ridley Scott');

alien.play();
ridleyScott.setQuotes(['Cast is everything.', 'Do what ...']);
alien.setDirector(ridleyScott);
alien.getDirector().speak(); //output:

//module.exports = Movie;



  var directorQuotes = alien.getDirector().speak();

  $('.mostrar').html(directorQuotes);
 




