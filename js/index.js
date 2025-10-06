//Game Constants
let inputDir = {x: 0, y: 0};
let foodSound = new Audio("./assets/food.wav");
let gameOverSound = new Audio("./assets/gameOver.wav");
let moveSound = new Audio("./assets/move.wav");
let musicSound = new Audio("./assets/music.wav");
let score=0;
let speed = 4;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
];
food = {x: 4, y: 12};
const board = document.getElementById('board');
const scoreBox = document.getElementById("scoreBox");


//Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
};

// Utility: detect collision
function isCollide(snake) {
    // If snake bumps into itself
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            gameOverSound.play();
            return true;
        };
    };
    // If snake hits wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        gameOverSound.play();
        return true;
    };
    return false;
};

function gameEngine(){
    //Updating he snake array & food;
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir =  {x: 0, y: 0};
        alert("Game Over! Press any key to play again.");
        snakeArr = [{x: 13, y: 15}];
        musicSound.play();
        score = 0;
    };

    //Moving the snake
    for(let i=snakeArr.length-2; i>=0; i--){
        snakeArr[i+1] = {...snakeArr[i]};
    };
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach(( e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    //Display the food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);


    //if you ate food, increment in snake happens
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score+=1;
        scoreBox.innerHTML = "Score = "+ score;
        snakeArr.unshift({
            x: snakeArr[0].x + inputDir.x,
            y: snakeArr[0].y + inputDir.y 
        });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a)* Math.random()), //generate food randomly
            y: Math.round(a + (b - a)* Math.random())
        };
    };

    //highScore
    let highScore = localStorage.getItem("highScore") || 0;

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }

    scoreBox.innerHTML = `Score: ${score} | High Score: ${highScore}`;
};

//Main logic starts here
window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    if (musicSound.paused) musicSound.play();  // start background music
    moveSound.play();
    inputDir = {x: 0, y: 1};  //start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
         case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
         case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
         case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
    
        default:
            break;
    };
});