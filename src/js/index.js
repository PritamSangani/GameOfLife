let canvas = document.getElementById('canvas');


let game = new GameOfLife(canvas, 50, 50, 20);

game.play();