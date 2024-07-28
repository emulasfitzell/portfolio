const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = document.getElementById('guess').value;
    let message = '';
    
    if (guess == randomNumber) {
        message = 'Félicitations! Vous avez deviné le bon nombre.';
    } else if (guess > randomNumber) {
        message = 'Votre nombre est trop grand!';
    } else {
        message = 'Votre nombre est trop petit!';
    }
    
    document.getElementById('message').textContent = message;
}
