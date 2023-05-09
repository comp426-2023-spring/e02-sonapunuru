function showHideShots() {
    let check = document.getElementById('opponent');
    let radiorps = document.getElementById('rps');

    // Show or hide radio buttons
    if (check.checked == true) {
        $('.shots').show();
        // Show or hide based on game selected
        if (radiorps.checked == true) {
            $('.rpsls').hide();
        }
    } else {
        $('.shots').hide();
    }



}

function startOver() {
    // Reset form
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame() {
    // Get whether the box is checked
    let check = document.getElementById('opponent');

    // Get the selected game
    let game = $('input[type=radio][name=game]:checked').val();


    let shot = '';
    // Get the shot selected
    if (check.checked == true) {
        shot = $('input[type=radio][name=shot]:checked').val() + '/';
    } 

    // Configure base URL
    let baseurl = window.location.href + 'app/';
    console.log(baseurl);

    
    // Configure url
    let url = baseurl + game + '/play/' + shot

    // Fetch results
    let response = await fetch(url);
    let results = await response.json();
    
    // Log results
    console.log(results)

    // Set results html element
    let resultElement = document.getElementById('result');

    if (check.checked == false) {
        // Set results HTML for no shot
        resultElement.innerHTML = 'Opponent: ' + results.player;
    } else {
        // Set results HTML for shot
        resultElement.innerHTML = 'You: ' + results.player + ', Opponent: ' + results.opponent + ', Result: ' + results.result;
    }
    



}
