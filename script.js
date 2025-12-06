document.addEventListener("DOMContentLoaded",()=>{
    const cells = document.querySelectorAll('[data-cell]');
    let currentPlayer = 'X';
    let isGameOVer = false;
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

    console.log(cells);
    cells.forEach(element => {
        element.addEventListener('click',(e)=>{
            console.log(e.target.dataset.index);

        })
        
    });
})