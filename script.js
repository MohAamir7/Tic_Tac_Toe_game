document.addEventListener("DOMContentLoaded",function(){
    let board = Array(3)
                .fill(null)
                .map(()=>Array(3).fill(null));
    const cells = document.querySelectorAll('[data-cell]');
    const pl = document.querySelector('[data-status]');
    const reset = document.querySelector('[data-reset]');
    const bb = document.querySelector('[data-board]');
    const start = document.querySelector('[data-start]');
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
    function resetHtml(){
         board = Array(3)
                .fill(null)
                .map(()=>Array(3).fill(null));
        cells.forEach(c=>{
            c.textContent = '';
        })
        // start.setAttribute('enabled','');
        // start.addEventListener('click',initateGame);
        initateGame();
        
    }
    reset.addEventListener('click',resetHtml);
    function checkWinner(row,col){
        // console.log("check winner active",currentPlayer);
        let player = board[row][col];
        for(const [a,b,c] of isWinningPosition){
           if(board[Math.floor(a/3)][a%3] == player &&
            board[Math.floor(b/3)][b%3] == player &&
            board[Math.floor(c/3)][c%3] == player
           )
        return true;
        }
    }
    function isDraw(){if(!isGameOVer) return false;
        for(let row =0;row<3;row++){
            for(let col =0;col<3;col++){
                if(this.board[row][col]===null) return false;
            }
        }
        return true;}
    function makeMove(e){
        // console.log(e.target);
        idx = e.target.dataset.index;
        let row =Math.floor( idx/3);
        let col = Math.floor(idx%3);
        console.log(row,col);
        if(isGameOVer || board[row][col] !== null ) return;
        board[row][col] = currentPlayer;
        e.target.textContent = currentPlayer;
        // console.log(currentPlayer);
        if(checkWinner(row,col)){
            isGameOVer = true;
            isWinner = currentPlayer;
            alert("Winner is "+currentPlayer);
            currentPlayer = 'X';
            // initateGame();
        }else if(isDraw()){
            alert("Game is Draw !! Please Click Reset to Play Again");
            // initateGame();
        }else{
            currentPlayer = currentPlayer === 'X'?'O':'X';
            pl.textContent = `Player ${currentPlayer}`;
        }

    }

    // start.addEventListener('click',initateGame);
    

    function initateGame(){
        isGameOVer = false;
        cells.forEach(c=>{
            c.addEventListener('click',makeMove)
        })
        // start.setAttribute('disabled','');
    }
    initateGame();
});