let tds = document.querySelectorAll('td');
let queue = "x";
let gameOver = false;
let board = [
    '', '', '',
    '', '', '',
    '', '', '',
];
let restartButton = document.querySelector('#restartButton')
restartButton.addEventListener('click', function () {
    for (let index = 0; index < board.length; index++) {
        tds[index].innerText = '';
    }
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    gameOver = false;
    queue = "x";
})



for (let index = 0; index < tds.length; index++) {
    tds[index].addEventListener('click', function () {
        if (gameOver === false) {
            tds[index].innerHTML = queue;
            board[index] = queue;
            if (queue === 'x') {
                queue = 'o'
            }
            else if (queue === 'o') {
                queue = 'x'
            }

            if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
                alert("Гравець " + "x " + "переміг!");
                gameOver = true;
            }
            else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[3] === 'o' && board[4] === 'o' && board[5] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[2] === 'o' && board[5] === 'o' && board[8] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[1] === 'o' && board[4] === 'o' && board[7] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
                alert("Гравець " + "o " + "переміг!");
                gameOver = true;
            }
            else if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
                alert("Дружба перемогла! Нічия!")
                gameOver = true;
            }
        }
    })
}




