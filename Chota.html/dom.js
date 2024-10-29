let randNumber = Math.trunc(Math.random() * 50) + 1;
let score = 5;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
    } else if (guess === randNumber) {
        document.querySelector('.message').textContent = '🎉 Hurray! You got the Correct Number!';
        document.querySelector('.number').textContent = randNumber;
        document.querySelector('.grid-container').style.backgroundColor = '#662203';
        document.querySelector('.number').style.backgroundColor = '#16E60B';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else {
        handleGuess(guess);
    }
});

function handleGuess(guess) {
    if (guess > randNumber) {
        checkScore('Too High, Try a Lower Number');
    } else {
        checkScore('Too Low, Try a Higher Number');
    }
}

function checkScore(message) {
    if (score > 1) {
        document.querySelector('.message').textContent = `📉 ${message}`;
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '😢 You Lost the GAME!';
        document.querySelector('.score').textContent = 0;
    }
}

document.querySelector('.again').addEventListener('click', function () {
    score = 5;
    randNumber = Math.trunc(Math.random() * 50) + 1;
    document.querySelector('.message').textContent = '⏳ Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.grid-container').style.backgroundColor = '#0C5F66';
    document.querySelector('.number').style.backgroundColor = '#46B6EA';
});
