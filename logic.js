let eaten_apple = false; //to append a tile to the snake
const zeilen = 33;
const spalten = Math.floor(((window.innerWidth / window.innerHeight) * (100 / 3)) * 0.90);
let snake_arr = [[3, 1], [2, 1], [1, 1]];
let direction = [1, 0]; // direction as a vektor


function check_colition() {
    let i = 0;
    let j = 0;
    while (i < snake_arr.length) {
        //out of field check
        if (snake_arr[i][0] >= spalten || snake_arr[i][0] < 0 || snake_arr[i][1] >= zeilen || snake_arr[i][1] < 0) {
            return true;
        }
        //interfering with itself
        j = 0;
        while (j < snake_arr.length) {
            if (snake_arr[i][0] == snake_arr[j][0] && snake_arr[i][1] == snake_arr[j][1] && i != j) {
                return true;
            }
            j++;
        }
        i++;
    }
    return false;
}

function end() {
    snake_arr = [[3, 1], [2, 1], [1, 1]]; //reset the snake and so on
    direction = [1, 0];
    direction_chanched = false;
    eaten_apple = false;
    set_high_score();
    score = 0;
    pause();
}

function pause() {
    if (is_pause) {
        Interval = setInterval(main_loop, speed); //if alredy paused → resume
    }
    else {
        clearInterval(Interval); //pause if not
    }
    is_pause = !is_pause;
    draw_pause_menu();
}

function check_apple() {
    if (snake_arr[0][0] == apple[0] && snake_arr[0][1] == apple[1]) { //if the apple is on the first tile of the snake
        apple = create_apple();
        eaten_apple = true;
        score++;
    }
}

function create_apple() {
    const x = Math.floor(Math.random() * spalten);
    const y = Math.floor(Math.random() * zeilen);
    let i = 0;
    while (i < snake_arr.length) { //prevent from appearing on the snake
        if (snake_arr[i][0] == x && snake_arr[i][1] == y) {
            return create_apple();
        }
        i++;
    }
    return [x, y]
}

function move_snake() {
    if (eaten_apple) {
        snake_arr.push([null, null]); //apped an tile to make it longer
        eaten_apple = false;
    }
    let i = snake_arr.length - 1;
    while (i > 0) {
        snake_arr[i][0] = snake_arr[i - 1][0]; //takes the value from the previous index up to [0]
        snake_arr[i][1] = snake_arr[i - 1][1];
        i--;
    }
    snake_arr[0][0] += direction[0]; //adds to the 0 index the direction
    snake_arr[0][1] += direction[1];
}

function set_high_score() {
    if (localStorage.getItem("score") === null || localStorage.getItem("score") < score) { //stores the hight score in the browser local storage
        localStorage.setItem("score", score);
    }
}

function faster_movement() {
    if (speed == std_speed) {//takes the fas_speed value as speed and restarts the interval to adopt the speed
        speed = fas_speed;
    }
    else {
        speed = std_speed;
    }
    clearInterval(Interval);
    if (!is_pause) {
        Interval = setInterval(main_loop, speed);
    }
}