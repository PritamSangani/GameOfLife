function GameOfLife(canvas, cols, rows) {
    let width = canvas.width;   // cols
    let height = canvas.height; // rows
    let cellSize = width / cols;

    let board = new Board(canvas, cellSize);
    //let grid = init2DArray();
    // grid = randomFillGrid(grid);
    let grid = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]];

    function init2DArray() {
        let arr = new Array(cols);

        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
        }

        return arr;
    }

    function randomFillGrid(grid) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = Math.floor(Math.random() * 2);
            }
        }

        return grid;
    }

    function play() {
        interval = setInterval(update, 500);
    }

    function update() {
        updateGen();
        updateBoard();
    }

    function updateGen() {
        let nextGen = init2DArray();
        
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let state = grid[i][j];
                let neighbours = countLiveNeighbours(i, j);
                
                if (state == 1) {
                    if (neighbours < 2 || neighbours > 3) {
                        nextGen[i][j] = 0;
                    } else {
                        nextGen[i][j] = state;
                    }
                } else {
                    if (neighbours === 3) {
                        nextGen[i][j] = 1;
                    }
                }
                
            }
        }

        grid = nextGen;

    }

    function countLiveNeighbours(x, y) {
        let sum = 0;

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if ( !( x + i == -1
                    || y + j == -1
                    || x + i > rows - 1
                    || y + j > cols - 1 ) ) {
                // And if the spot contains a neighbor...
                if ( grid[x + i][y + j]
                      && !( i == 0 && j == 0 ) ) {
                    sum++;  // Count neighbor
                }
              }
            }
        }

        return sum;
    }

    function updateBoard() {
        board.clear();
        drawBoard();
    }

    function drawBoard() {
        board.drawBoard(0,0,cols * cellSize, rows * cellSize, 'black');
        
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = j * cellSize;
                let y = i * cellSize;        
            
                if (grid[i][j] == 1) {
                    board.fillCell(x, y, 'white', 'black');
                }
            }
        }
    }

    return {
        play
    };
}
