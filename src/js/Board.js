function Board(canvas, cellSize) {
    let ctxt = canvas.getContext('2d');

    function drawBoard(x, y, width, height, boardColour) {
        ctxt.fillStyle = boardColour;
        ctxt.fillRect(x, y, width, height);
    }

    function fillCell(x, y, fillColour, strokeColour) { 
        ctxt.fillStyle = fillColour;
        ctxt.fillRect(x, y, cellSize-1, cellSize-1);
        ctxt.strokeStyle = strokeColour;
        ctxt.strokeRect(x, y, cellSize-1, cellSize-1);
    }

    function clear() {
        ctxt.clearRect(0, 0, canvas.width, canvas.height);
    }


    return {
        clear,
        fillCell,
        drawBoard
    };
}