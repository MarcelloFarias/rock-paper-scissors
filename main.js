const items = ['Rock', 'Paper', 'Scissors'],
      rock = document.querySelector('.rock'),
      paper = document.querySelector('.paper'),
      scissors = document.querySelector('.scissors');
let computerChoice = Math.floor(Math.random() * 3);
let playerChoice;
let display = document.querySelector('.display');

if(computerChoice == 0) {
    computerChoice = items[computerChoice];
}
else if(computerChoice == 1) {
    computerChoice = items[computerChoice];
}
else {
    computerChoice = items[computerChoice];
}

rock.addEventListener('click', function() {
    playerChoice = items[0];

    if(computerChoice === 'Rock') {
        display.innerHTML = `Tie! <br> Computer chose ${computerChoice}`;
    }
    else if(computerChoice === 'Paper') {
        display.innerHTML = `Computer won! <br> Computer chose ${computerChoice}`;
    }
    else {
        display.innerHTML = `You won! <br> Computer chose ${computerChoice}`;
    }
});

paper.addEventListener('click', function() {
    playerChoice = items[1];

    if(computerChoice === 'Rock') {
        display.innerHTML = `You won! <br> Computer chose ${computerChoice}`;
    }
    else if(computerChoice === 'Paper') {
        display.innerHTML = `Tie! <br> Computer chose ${computerChoice}`;
    }
    else {
        display.innerHTML = `Computer won! <br> Computer chose ${computerChoice}`;
    }
});

scissors.addEventListener('click', function() {
    playerChoice = items[2];

    if(computerChoice === 'Rock') {
        display.innerHTML = `Computer won! <br> Computer chose ${computerChoice}`;
    }
    else if(computerChoice === 'Paper') {
        display.innerHTML = `You won! <br> Computer chose ${computerChoice}`;
    }
    else {
        display.innerHTML = `Tie! <br> Computer chose ${computerChoice}`;
    }
});