/*----- constants -----*/
const COLOR_LOOKUP = {
    '1': 'green',
    '-1': 'blue',
    'null': 'black'
};

/*----- app's state (variables) -----*/
let board = [];

let turn;

let winner;



/*----- cached element references -----*/
const message = document.querySelector('p');

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

function handleMove(evt {

})


function render () {
    renderBoard();
    renderMessage();
}


function renderBoard() {
    board.forEach(function(tileVal, idx) {
        const tileEl = document.getElementById(`tile${idx}`);
        tileEl.style.backgroundColor = COLOR_LOOKUP[tileVal];
    });
}

function renderMessage() {
    if (winner === 'T') {
        message.innerHTML = "It's a Tie!";
    } else if (winner) {
        message.innerHTML = `Congratulations ${COLOR_LOOKUP[winner]}">${COLOR_LOOKUP[winner].toUpperCase()}!`;
    } else {
        message.innerHTML = ` It is ${COLOR_LOOKUP[winner]}">${COLOR_LOOKUP[winner].toUpperCase()}'s turn `;
    }
        
        

}




