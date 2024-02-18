
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

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case 'f':
            faster_movement();
            break;
        case 'p':
            pause();
            break;
        case 'w':
            if (direction_chanched == false) { d_up(); }
            direction_chanched = true;
            break;
        case 'a':
            if (direction_chanched == false) { d_left(); }
            direction_chanched = true;
            break;
        case 's':
            if (direction_chanched == false) { d_down(); }
            direction_chanched = true;
            break;
        case 'd':
            if (direction_chanched == false) { d_right(); }
            direction_chanched = true;
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
}, true);