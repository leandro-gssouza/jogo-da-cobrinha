let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;
let snake = [];
snake[0] = {
    x: 1.25 * box,
    y: 1.25 * box
}

function criarBG() {
    context.fillStyle ="lightgreen";
    context.fillRect (20, 20, 25 * box, 25 * box);
}

function criarCobrinha(){
    for(i=0; i< snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box );
    }
}

criarBG();
criarCobrinha();