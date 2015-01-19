
      function Director (Name) {
            this.name = Name;
            quotes = [];
      }

      Director.prototype = {
          constructor: Director,
          speak:function ()  {
            console.log(this.name + ' says: ')
            quotes = (this.name + ' says: ');
            for (var i = 0; i < this.quotes.length; i++) {
              console.log(this.quotes[i] + '\n');
              quotes += " '" + this.quotes[i] + "';";
              };

              


              return quotes;
              
          },
          setQuotes: function(quotes) {
            this.quotes = quotes
          }
         
      };
      
      
      module.exports = Director;