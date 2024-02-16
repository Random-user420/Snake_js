function check_colition() {
    let i = 0;
    let j = 0;
    while(i<snake_arr.length) {
        if (snake_arr[i][0] >= spalten || snake_arr[i][0] < 0 || snake_arr[i][1] >= zeilen || snake_arr[i][1] < 0) {
            return true;
        }
        j = 0;
        while (j<snake_arr.length) {
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
    window.location.reload();
}

function check_apple() {
   if (snake_arr[0][0] == apple[0] && snake_arr[0][1] == apple[1]) {
        apple = create_apple();
        eaten_apple = true;
   }
}

function create_apple() {
    const x = Math.floor(Math.random() * spalten);
    const y = Math.floor(Math.random() * zeilen);
    let i = 0;
    while(i<snake_arr.length) {
        if (snake_arr[i][0] == x && snake_arr[i][1] == y) {
            return create_apple();
        }
        i++;
    }
    return [x,y]
}

function move_snake() {
    if (eaten_apple) {
        snake_arr.push([null,null]);
        eaten_apple = false;
    }
    let i = snake_arr.length-1;
    while(i>0) {
        snake_arr[i][0] = snake_arr[i-1][0];
        snake_arr[i][1] = snake_arr[i-1][1];
        i--;
    }
    snake_arr[0][0] += direction[0];
    snake_arr[0][1] += direction[1];
}