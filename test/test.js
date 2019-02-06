const frameSpeed = 500;

let canvas1 = document.getElementById('1');
let canvas2 = document.getElementById('2');
let canvas3 = document.getElementById('3');


// blinker
let seed1 = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ];

// toad
let seed2 = [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0],
                [0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
            ];

// beacon
let seed3 = [
                [0, 0, 0, 0, 0, 0],
                [0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0]
            ];

let game1 = new GameOfLife(canvas1, 5, 5, frameSpeed, seed1);
let game2 = new GameOfLife(canvas2, 6, 6, frameSpeed, seed2);
let game3 = new GameOfLife(canvas3, 6, 6, frameSpeed, seed3);

game1.play();
game2.play();
game3.play();