document.addEventListener("DOMContentLoaded",()=>{
    let board = Array(3)
                .fill(null)
                .map(()=>Array(3).fill(null));
    const cells = document.querySelectorAll('[data-cell]');
    let currentPlayer = 'X';
    let isGameOVer = false;
    let isWinner = null;
    const isWinningPosition = [
        [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
    ];
    function checkWinner(row,col){
        console.log("check winner active",currentPlayer);
        let player = board[row][col];
        for(const [a,b,c] of isWinningPosition){
           if(board[Math.floor(a/3)][a%3] == player &&
            board[Math.floor(b/3)][b%3] == player &&
            board[Math.floor(c/3)][c%3] == player
           )
        return true;
        }
    }

    function makeMove(e){
        console.log(e.target);
        idx = e.target.dataset.index;
        let row =Math.floor( idx/3);
        let col = Math.floor(idx%3);
        console.log(row,col);
        if(isGameOVer || board[row][col] !== null ) return;
        board[row][col] = currentPlayer;
        e.target.textContent = currentPlayer;
        console.log(currentPlayer);
        if(checkWinner(row,col)){
            alert("Winner is "+currentPlayer);
            isGameOVer = true;
            isWinner = currentPlayer;
        }else{
            currentPlayer = currentPlayer === 'X'?'O':'X';
        }

    }

    function initateGame(){
        cells.forEach(c=>{
            c.addEventListener('click',makeMove)
        })
    }
    initateGame();
})