
function d_right() {
    if (direction[0] === 0) {
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
    const touch_e_x = e.changedTouches[0].clientX;
    const touch_e_y = e.changedTouches[0].clientY;

    if (Math.abs(touch_e_x - touch_s_x) >= Math.abs(touch_e_y - touch_s_y)) {
        if (touch_e_x - touch_s_x >= touch_threshold && !direction_chanched) { direction = [1, 0]; }
        else if (touch_s_x - touch_e_x >= touch_threshold && !direction_chanched) { direction = [-1, 0]; }
        else if (Math.abs(touch_e_x - touch_s_x) <= touch_pause_threshold) { pause(); }
    }
    else if (touch_e_y - touch_s_y >= touch_threshold && !direction_chanched) { direction = [0, 1]; }
    else if (touch_s_y - touch_e_y >= touch_threshold && !direction_chanched) { direction = [0, -1]; }
    else if (Math.abs(touch_s_y - touch_e_y) <= touch_pause_threshold) { pause(); }
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
            if (!direction_chanched) { d_up(); }
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

document.addEventListener("touchstart", function (event) {
    event.preventDefault();
    touch_s_x = event.touches[0].clientX;
    touch_s_y = event.touches[0].clientY;
})

document.addEventListener("touchend", function (event) {
    swipe(event);
    direction_chanched = true;
})