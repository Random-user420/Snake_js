
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
    if (event.key == 'p') {
        pause();
    }
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    if (direction_chanched == false) {
        switch (event.key) {
            case 'w':
                d_up();
                break;
            case 'a':
                d_left();
                break;
            case 's':
                d_down();
                break;
            case 'd':
                d_right();
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
        direction_chanched = true;
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);