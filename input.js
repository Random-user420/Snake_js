const std_speed = 150;
const fas_speed = 50;
const touch_threshold = 100; //then it's counted as a swipe i the direction
const touch_pause_threshold = 2; //under this it is count as a tab to pause and unpause
let is_pause = false;
let direction_chanched = false; //to prevent to change a direction 2 Times bevore the snake moved



function d_right() {
    if (direction[0] === 0) { //to prevent that the snake goes in the opposite diection of the current
        direction = [1, 0];
    }
}
function d_left() {
    if (direction[0] === 0) {
        direction = [-1, 0];
    }
}
function d_up() {
    if (direction[1] === 0) {
        direction = [0, -1];
    }
}
function d_down() {
    if (direction[1] === 0) {
        direction = [0, 1];
    }
}

function swipe(e) {
    const touch_e_x = e.changedTouches[0].clientX; //the coordinate at the end of the touch event
    const touch_e_y = e.changedTouches[0].clientY;

    if (Math.abs(touch_e_x - touch_s_x) >= Math.abs(touch_e_y - touch_s_y)) { //wich diection is grater
        if (touch_e_x - touch_s_x >= touch_threshold && !direction_chanched && direction[0] === 0) {
            direction = [1, 0];
        } //if to right is more than the touch_threshold
        else if (touch_s_x - touch_e_x >= touch_threshold && !direction_chanched && direction[0] === 0) {
            direction = [-1, 0];
        } //if to left is more than the touch_threshold
        else if (Math.abs(touch_e_x - touch_s_x) <= touch_pause_threshold) { pause(); } //if its under te pause threshold then pause
    }
    else if (touch_e_y - touch_s_y >= touch_threshold && !direction_chanched && direction[1] === 0) {
        direction = [0, 1];
    } //if to down is more than the touch_threshold
    else if (touch_s_y - touch_e_y >= touch_threshold && !direction_chanched && direction[1] === 0) {
        direction = [0, -1];
    } //if to up is more than the touch_threshold
    else if (Math.abs(touch_s_y - touch_e_y) <= touch_pause_threshold) { pause(); } //if its under te pause threshold then pause
    direction_chanched = true;
}

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case 'f':
            faster_movement();
            break;
        case 'p':
            pause();
            break;
        case 'w':
            if (!direction_chanched) { d_up(); } //to prevent that the diection gets changed twice bevore the snake moved
            direction_chanched = true;
            break;
        case 'a':
            if (!direction_chanched) { d_left(); }
            direction_chanched = true;
            break;
        case 's':
            if (!direction_chanched) { d_down(); }
            direction_chanched = true;
            break;
        case 'd':
            if (!direction_chanched) { d_right(); }
            direction_chanched = true;
            break;
    }
}, true);

let touch_s_x
let touch_s_y

window.addEventListener("touchstart", function (event) {
    event.preventDefault(); //should prevent zooming and reloading of the page
    touch_s_x = event.touches[0].clientX;
    touch_s_y = event.touches[0].clientY;
}, { passive: false })

window.addEventListener("touchend", function (event) {
    event.preventDefault();
    swipe(event);
}, { passive: false })