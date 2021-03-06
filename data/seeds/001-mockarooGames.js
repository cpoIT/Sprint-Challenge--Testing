
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {"title":"Quo Lux","genre":"Drama|Romance","releaseYear":1992},
{"title":"Fintone","genre":"Comedy","releaseYear":1986},
{"title":"Bitwolf","genre":"Drama","releaseYear":1997},
{"title":"Subin","genre":"Drama","releaseYear":1984},
{"title":"Andalax","genre":"Comedy|Crime","releaseYear":2002},
{"title":"Latlux","genre":"Crime|Horror|Mystery","releaseYear":2016},
{"title":"Fix San","genre":"Drama","releaseYear":1999},
{"title":"Stim","genre":"Drama|Romance","releaseYear":1985},
{"title":"Rank","genre":"Crime|Drama","releaseYear":2010},
{"title":"Ventosanzap","genre":"Action|Comedy|Sci-Fi","releaseYear":1995},
{"title":"Temp","genre":"Drama","releaseYear":1998},
{"title":"Gembucket","genre":"Adventure|Children|Fantasy","releaseYear":1989},
{"title":"Stronghold","genre":"Comedy|Drama","releaseYear":2005},
{"title":"Tin","genre":"Comedy|Romance","releaseYear":1982},
{"title":"Treeflex","genre":"Crime|Mystery","releaseYear":1984},
{"title":"Kanlam","genre":"Comedy","releaseYear":1999},
{"title":"Andalax","genre":"Drama","releaseYear":1983},
{"title":"Quo Lux","genre":"Comedy|Drama|Thriller","releaseYear":1988},
{"title":"Duobam","genre":"Adventure|Animation|Children|Comedy|Fantasy|Romance","releaseYear":1992},
{"title":"Home Ing","genre":"Comedy","releaseYear":2010},
{"title":"Voyatouch","genre":"Action|War","releaseYear":1986},
{"title":"Wrapsafe","genre":"Comedy","releaseYear":1988},
{"title":"Aerified","genre":"Adventure|Drama|Romance","releaseYear":1989},
{"title":"Pannier","genre":"Comedy","releaseYear":2012},
{"title":"Duobam","genre":"Documentary","releaseYear":2001},
{"title":"Pannier","genre":"Adventure|Romance","releaseYear":1982},
{"title":"Redhold","genre":"Drama","releaseYear":2013},
{"title":"Flexidy","genre":"Crime|Drama|Thriller","releaseYear":2018},
{"title":"Flowdesk","genre":"Adventure","releaseYear":1985},
{"title":"Redhold","genre":"Drama","releaseYear":1985},
{"title":"Regrant","genre":"Drama","releaseYear":1995},
{"title":"Flexidy","genre":"Documentary|IMAX","releaseYear":1998},
{"title":"Vagram","genre":"Drama","releaseYear":2001},
{"title":"Asoka","genre":"Drama|Horror|Thriller","releaseYear":1997},
{"title":"Kanlam","genre":"Fantasy|Horror|Romance|Thriller","releaseYear":1985},
{"title":"Sonsing","genre":"Comedy|Romance","releaseYear":1997},
{"title":"Voyatouch","genre":"Documentary|IMAX","releaseYear":1990},
{"title":"Zathin","genre":"Adventure|Documentary","releaseYear":null},
{"title":"It","genre":"Comedy|Drama|Romance","releaseYear":1989},
{"title":"Biodex","genre":"Crime|Drama|Mystery","releaseYear":1989},
{"title":"Namfix","genre":"Drama|Sci-Fi|Thriller","releaseYear":2015},
{"title":"Stronghold","genre":"Action|Comedy|Crime|Thriller","releaseYear":null},
{"title":"Bytecard","genre":"Action|Comedy","releaseYear":1997},
{"title":"Duobam","genre":"Action|Crime|Film-Noir|Mystery|Thriller","releaseYear":2014},
{"title":"Cardify","genre":"Drama","releaseYear":2004},
{"title":"Tempsoft","genre":"Comedy","releaseYear":1989},
{"title":"Bamity","genre":"Action|Drama","releaseYear":1991},
{"title":"It","genre":"Comedy|Drama|Romance|War","releaseYear":2011},
{"title":"Zathin","genre":"Mystery|Romance|Sci-Fi","releaseYear":1987},
{"title":"Tampflex","genre":"Comedy|Drama|Romance","releaseYear":null},
{"title":"Konklux","genre":"Drama","releaseYear":1986},
{"title":"Solarbreeze","genre":"Comedy|Romance","releaseYear":2004},
{"title":"Zoolab","genre":"Comedy|Drama","releaseYear":1991},
{"title":"Regrant","genre":"Comedy|Drama|Romance","releaseYear":1998},
{"title":"Redhold","genre":"Drama|Horror","releaseYear":2013},
{"title":"Bamity","genre":"Drama","releaseYear":1989},
{"title":"Y-find","genre":"Action|Adventure|Fantasy|Sci-Fi","releaseYear":null},
{"title":"Temp","genre":"Documentary|Musical","releaseYear":2009},
{"title":"Fintone","genre":"Comedy|Romance","releaseYear":2005},
{"title":"Lotlux","genre":"Drama|Romance","releaseYear":1987},
{"title":"Tres-Zap","genre":"Adventure|Children|Fantasy","releaseYear":1987},
{"title":"It","genre":"Animation|Children","releaseYear":2016},
{"title":"Latlux","genre":"Drama","releaseYear":1984},
{"title":"Stim","genre":"Horror|Sci-Fi","releaseYear":2005},
{"title":"Fixflex","genre":"Drama","releaseYear":1986},
{"title":"Home Ing","genre":"Documentary","releaseYear":2008},
{"title":"Zaam-Dox","genre":"Comedy|Drama|Romance","releaseYear":1995},
{"title":"Cookley","genre":"Comedy","releaseYear":1987},
{"title":"Y-Solowarm","genre":"Drama","releaseYear":2016},
{"title":"Pannier","genre":"Crime|Drama|Mystery","releaseYear":2000},
{"title":"Span","genre":"Drama|Sci-Fi","releaseYear":2012},
{"title":"Cardguard","genre":"Comedy|Western","releaseYear":2013},
{"title":"Bigtax","genre":"Comedy|Romance","releaseYear":2010},
{"title":"Cardify","genre":"Comedy|Drama","releaseYear":1983},
{"title":"Quo Lux","genre":"Adventure","releaseYear":1998},
{"title":"Redhold","genre":"Drama","releaseYear":2002},
{"title":"Bigtax","genre":"Drama|Mystery","releaseYear":2011},
{"title":"Tresom","genre":"Comedy|Documentary","releaseYear":2002},
{"title":"Greenlam","genre":"Comedy|Drama|Romance","releaseYear":2011},
{"title":"Alpha","genre":"Animation|Musical|Romance","releaseYear":2004},
{"title":"Hatity","genre":"Action|Adventure|Animation|Sci-Fi","releaseYear":1996},
{"title":"Zoolab","genre":"Romance|Western","releaseYear":1998},
{"title":"Overhold","genre":"Comedy|Romance","releaseYear":1999},
{"title":"Cookley","genre":"Comedy","releaseYear":1982},
{"title":"Zathin","genre":"Animation","releaseYear":2005},
{"title":"Latlux","genre":"Action|Adventure|Fantasy|Sci-Fi","releaseYear":1988},
{"title":"Kanlam","genre":"Action|Comedy","releaseYear":2002},
{"title":"Y-find","genre":"Comedy","releaseYear":1988},
{"title":"Alpha","genre":"Thriller","releaseYear":2000},
{"title":"Stronghold","genre":"Thriller","releaseYear":2015},
{"title":"Namfix","genre":"Drama|Fantasy","releaseYear":2014},
{"title":"Bytecard","genre":"Adventure|Comedy|War","releaseYear":null},
{"title":"Greenlam","genre":"Drama|Romance","releaseYear":null},
{"title":"Ronstring","genre":"Documentary","releaseYear":null},
{"title":"Voltsillam","genre":"Drama","releaseYear":1992},
{"title":"Temp","genre":"Comedy|Romance","releaseYear":1998},
{"title":"Solarbreeze","genre":"Romance","releaseYear":null},
{"title":"Bitwolf","genre":"Documentary","releaseYear":1988},
{"title":"Mat Lam Tam","genre":"Comedy","releaseYear":2015},
{"title":"Hatity","genre":"Comedy|Crime","releaseYear":2000}
      ]);
    });
};
