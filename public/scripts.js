// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() {

	let check = document.getElementById('opponent');
	let radiorps = document.getElementsByClass('rps');
	let radiorpsls = document.getElementsByClass('rpsls');
	
	if (check.checked == true) {
		$('.shots').show()	
	} else {
		$('.shots').hide()	
	}

}

function startOver() {

	document.getElementById('userinput').reset();
	showHideShots();

}

async function playGame() {
			
	let game = $('input[type=radio][name=game]:checked').val();
	let shot = $('input[type=radio][name=shot]:checked').val();
	
	let baseurl = window.location.href + 'app/'
	console.log(baseurl)	
	let url = baseurl + game + /play/ + shot
	console.log(url)
		
	let response = await fetch(url)
	let result = await response.json()
	console.log(result)

}
