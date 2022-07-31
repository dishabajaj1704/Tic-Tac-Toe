tile1 = document.querySelector('#tile1');
tile2 = document.querySelector('#tile2');
tile3 = document.querySelector('#tile3');
tile4 = document.querySelector('#tile4');
tile5 = document.querySelector('#tile5');
tile6 = document.querySelector('#tile6');
tile7 = document.querySelector('#tile7');
tile8 = document.querySelector('#tile8');
tile9 = document.querySelector('#tile9');
winner = document.querySelector('#winner');
looser = document.querySelector('#looser');
tie = document.querySelector('#tie');
modal = document.querySelector('#modal');
box = document.querySelectorAll('.box');
startStopBtn = document.querySelector('#startStop');
let win = false;
let isPlaying = false;
let draw = 0;
let x = true;

intialize();

function intialize() {
    startStopBtn.addEventListener('click', handleStartStop);
    // startStopBtn.addEventListener('click', startGame)
}


function handleStartStop(evt) {
    evt.preventDefault();
    if (isPlaying) {
        console.log("hy");
        window.location.reload();
    } else {
        console.log('hello');
        startGame();
    }
}

function startGame() {
    x = true;
    isPlaying = true;
    addTileListeners();
    hide(modal);
    setText(startStopBtn, 'Stop Game');
}


function stopGame(evt) {
    isPlaying = false;
    removeTileListeners();
    setText(startStopBtn, 'Start Game');
    draw = 0;
    box.forEach((elem) => setText(elem, "&nbsp;"));

}

function addTileListeners() {
    tile1.addEventListener('click', WinOrLose);
    tile2.addEventListener('click', WinOrLose);
    tile3.addEventListener('click', WinOrLose);
    tile4.addEventListener('click', WinOrLose);
    tile5.addEventListener('click', WinOrLose);
    tile6.addEventListener('click', WinOrLose);
    tile7.addEventListener('click', WinOrLose);
    tile8.addEventListener('click', WinOrLose);
    tile9.addEventListener('click', WinOrLose);

}



function removeTileListeners() {
    tile1.removeEventListener('click', WinOrLose);
    tile2.removeEventListener('click', WinOrLose);
    tile3.removeEventListener('click', WinOrLose);
    tile4.removeEventListener('click', WinOrLose);
    tile5.removeEventListener('click', WinOrLose);
    tile6.removeEventListener('click', WinOrLose);
    tile7.removeEventListener('click', WinOrLose);
    tile8.removeEventListener('click', WinOrLose);
    tile9.removeEventListener('click', WinOrLose);

}
function WinOrLose(evt) {
    draw++;
    whatToShow(evt);
    //  let clickedtile=parseInt(evt.target.dataset.position);
    if (tile1.textContent === "X" && tile2.textContent === 'X' && tile3.textContent === "X") {
        win = true;
        showResults(evt);

    }
    if (tile1.textContent === "O" && tile2.textContent === 'O' && tile3.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }

    if (tile4.textContent === "X" && tile5.textContent === 'X' && tile6.textContent === "X") {
        win = true;
        showResults(evt);
        isPlaying = false;

    }
    if (tile4.textContent === "O" && tile5.textContent === 'O' && tile6.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }
    if (tile7.textContent === "X" && tile8.textContent === 'X' && tile9.textContent === "X") {
        win = true;
        showResults(evt);
        isPlaying = false;

    }
    if (tile7.textContent === "O" && tile8.textContent === 'O' && tile9.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }
    if (tile1.textContent === "X" && tile4.textContent === 'X' && tile7.textContent === "X") {
        win = true;
        showResults(evt);
        isPlaying = false;

    }
    if (tile1.textContent === "O" && tile4.textContent === 'O' && tile7.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }
    if (tile2.textContent === "X" && tile5.textContent === 'X' && tile8.textContent === "X") {
        win = true;
        showResults(evt);
        isPlaying = false;

    }
    if (tile2.textContent === "O" && tile5.textContent === 'O' && tile8.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }
    if (tile3.textContent === "X" && tile6.textContent === 'X' && tile9.textContent === "X") {
        win = true;
        showResults(evt);
        isPlaying = false;

    }
    if (tile3.textContent === "O" && tile6.textContent === 'O' && tile9.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }
    if (tile1.textContent === "X" && tile5.textContent === 'X' && tile9.textContent === "X") {
        win = true;
        showResults(evt);
        isPlaying = false;

    }
    if (tile1.textContent === "O" && tile5.textContent === 'O' && tile9.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }
    if (tile3.textContent === "X" && tile5.textContent === 'X' && tile7.textContent === "X") {
        win = true;
        showResults(evt);
        isPlaying = false;

    }
    if (tile3.textContent === "O" && tile5.textContent === 'O' && tile7.textContent === "O") {
        console.log("True");
        win = true;
        showResults(evt);
    }

    if (draw === 9) {
        win = false;
        showResults(evt);
    }

}

function whatToShow(evt) {
    if (x) {
        setText(evt.target, "X")
        evt.target.removeEventListener('click', WinOrLose);
        x = false;
    }
    else {
        setText(evt.target, "O");
        evt.target.classList.add('font-o')
        evt.target.removeEventListener('click', WinOrLose);
        x = true;
    }

}


function showResults(evt) {

    const winText = `${evt.target.textContent} won`;
    const tie = "Game Over!";

    if (win) {
        modal.classList = "text animate__fadeInLeft";
        setText(modal, winText)
        show(modal);
        stopGame();
        intialize();
        // setText(startStopBtn, "Start Game");

    }
    else {
        modal.classList = "text animate__fadeInLeft";
        setText(modal, tie);
        show(modal);
        stopGame();
        intialize();
    }

}


//Helper Classes

function setText(elem, text) {
    elem.innerHTML = text;
}

function show(elem) {
    elem.style.display = "block";
}
function hide(elem) {
    elem.style.display = "none";
}
