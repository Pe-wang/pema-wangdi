let randNumber = Math.trunc(Math.random() * 50) + 1; // Initialize randNumber
let score = 5; // Initialize score
let highscore = 0; // Initialize highscore

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === randNumber) {
        displayMessage('🎉 Hurray! You got the Correct Number!');
        document.querySelector('.number').textContent = randNumber;
        document.querySelector('.grid-container').style.backgroundColor = '#662203';
        document.querySelector('.number').style.backgroundColor = '#16E60B';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        if (score > 1) {
            displayMessage(guess > randNumber ? '📉 Too High, Try a Lower Number' : '📈 Too Low, Try a Higher Number');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😢 You Lost the GAME!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 5; // Reset score
    randNumber = Math.trunc(Math.random() * 50) + 1; // Reset randNumber
    displayMessage('⏳ Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.grid-container').style.backgroundColor = '#0C5F66';
    document.querySelector('.number').style.backgroundColor = '#46B6EA';
});
