const searchName = document.getElementById('searchName');
const display = document.getElementsByClassName('result');

// display.addEventListener('')



fetch("https://api-football-v1.p.rapidapi.com/v2/teams/league/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "aa55097f39msha9681c60fc17d93p1617b2jsn660d2d1937d6"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});