function GameOfLife(canvas, cols, rows, seed = []) {
    const WIDTH = canvas.width;  
    const HEIGHT = canvas.height;
    const CELL_SIZE = WIDTH / cols;

    let board = new Board(canvas, CELL_SIZE);
    let grid = init2DArray();
    
    grid = (seed.length === 0) ? randomFillGrid(grid) : seed;
    
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
        updateBoard();
        interval = setInterval(update, 15);
    }

    function update() {
        nextGen();
        updateBoard();
    }

    function nextGen() {
        let nextGen = init2DArray();
        
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let state = grid[i][j];
                let neighbours = countLiveNeighbours(grid, i, j);                        

                nextGen[i][j] = state;

                if (state == 1 && (neighbours < 2 || neighbours > 3)) {
                    nextGen[i][j] = 0;
                } else if (state === 0 && neighbours === 3) {
                    nextGen[i][j] = 1;
                }
                
            }
        }

        grid = nextGen;

    }

    function countLiveNeighbours(grid, x, y) {
        let sum = 0;
    
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                let col = (i + x + cols) % cols;
                let row = (j + y + rows) % rows;
                
                sum += grid[col][row];
            }
        }
        // don't want to count the cell you are checking
        sum -= grid[x][y];

        return sum;
    }

    function updateBoard() {
        board.clear();
        drawBoard();
    }

    function drawBoard() {
        board.drawBoard(0, 0, WIDTH, HEIGHT, 'black');
        
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                let x = j * CELL_SIZE;
                let y = i * CELL_SIZE;        
            
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
