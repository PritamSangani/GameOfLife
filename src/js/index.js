/* Initialise and play game here */
/* NOTE: width = columns, height = rows */

let canvas = document.getElementById('canvas');
let game = new GameOfLife(canvas, 5, 5);

game.play();