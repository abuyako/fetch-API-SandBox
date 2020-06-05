fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers%20Endgame", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "564c9aa32cmsh899edf551148383p12693ajsn0db40dd3a0e4"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});