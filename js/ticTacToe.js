const place = document.querySelectorAll('.tic-tac-toe > div');
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let player = 'o';
let Owinner = 0;
let Xwinner = 0;

function ticTacToe() {
  for (let i = 0; i < 9; i++) {
    place[i].addEventListener('click', () => {
      setValue(i);
    })
  } 
}

function setValue(i) {
  if (gameBoard[i] != '') {
  } else {
    gameBoard[i] = player;
    printValue(i);
    changePlayer();
  }

  verifyVictory();
}

function changePlayer() {
  if (player === 'o') {
    player = 'x';
  } else {
    player = 'o';
  }
}

function printValue(i) {
  if (player === 'x') {
    place[i].classList.remove('null');
    place[i].classList.remove('o');
    place[i].classList.add('x');
  } else if (player === 'o') {
    place[i].classList.remove('null');
    place[i].classList.remove('x');
    place[i].classList.add('o');
  }
}

function verifyVictory() {
  if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
    Owinner += 1;
    restart();
  } else if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
    Xwinner += 1;
    restart();
  } else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') {
    Xwinner += 1;
    restart();
  } else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') {
    Xwinner += 1;
    restart();
  } else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') {
    Xwinner += 1;
    restart();
  } else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') {
    Xwinner += 1;
    restart();
  } else if (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') {
    Xwinner += 1;
    restart();
  } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
    Xwinner += 1;
    restart();
  } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
    Xwinner += 1;
    restart();
  } else if (
    gameBoard[0] != '' &&
    gameBoard[1] != '' &&
    gameBoard[2] != '' &&
    gameBoard[3] != '' &&
    gameBoard[4] != '' &&
    gameBoard[5] != '' &&
    gameBoard[6] != '' &&
    gameBoard[7] != '' &&
    gameBoard[8] != '' 
  ) {
    restart();
  }
}

function restart() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  for(let i = 0; i < 9; i++) {
    place[i].classList.add('null')
  }

  if (player === 'x') {
    player = 'x';
  } else {
    player = 'o';
  }

  printWins();
}

function printWins() {
  document.querySelector('.points .o h1').innerHTML = `: ${Owinner}`;
  document.querySelector('.points .x h1').innerHTML = `: ${Xwinner}`;
}

ticTacToe();