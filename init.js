const main_gr = document.getElementById("main-grid");
const zeilen = 33;
const spalten = Math.floor(((window.innerWidth / window.innerHeight) * (100 / 3)) * 0.90);
let snake_arr = [[3, 1], [2, 1], [1, 1]];
let direction = [1, 0]; // direction as a vektor
let direction_chanched = false; //to prevent to change a direction 2 Times bevore the snake moved
let eaten_apple = false; //to append a tile to the snake
let apple = [];
apple = create_apple();
let is_pause = false;
let score = 0;
set_high_score(); //to set a score to read, if this is run for the first time in the browser
let speed = 150;
const std_speed = 150;
const fas_speed = 50;
const touch_threshold = 100; //then it's counted as a swipe i the direction
const touch_pause_threshold = 2; //under this it is count as a tab to pause and unpause

draw_initaial_field();
let Interval = setInterval(main_loop, speed);
draw_snake();
pause();