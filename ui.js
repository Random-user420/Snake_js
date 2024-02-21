function draw_apple() {
    document.getElementById(apple.toString()).style.backgroundColor = "rgb(255, 60, 60)"
}

function draw_new_field_over_snake() {
    let i = 0;
    while (i < snake_arr.length) {
        //uneven field get a lighter green
        if (snake_arr[i][0] % 2 == 1 && snake_arr[i][1] % 2 == 0 || snake_arr[i][0] % 2 == 0 && snake_arr[i][1] % 2 == 1) {
            document.getElementById(snake_arr[i].toString()).style.backgroundColor = "rgb(10, 191, 5)";
        } else {
            document.getElementById(snake_arr[i].toString()).style.backgroundColor = "rgb(65, 255, 60)";
        }
        i++;
    }
}

function draw_initaial_field() {
    const tile_widht = 90 / spalten;
    let h = 0;
    while (h < zeilen) {
        let w = 0;
        while (w < spalten) {
            //create the tile as a div
            const element = document.createElement("div");
            element.id = w.toString() + "," + h.toString();
            element.className = "tile";
            element.innerHTML = "";
            element.style.width = tile_widht + "vw";
            //uneven field get a lighter green
            if (h % 2 == 1 && w % 2 == 0 || h % 2 == 0 && w % 2 == 1) {
                element.style.backgroundColor = "rgb(10, 191, 5)";
            } else {
                element.style.backgroundColor = "rgb(65, 255, 60)";
            }
            main_gr.appendChild(element);
            w++;
        }
        h++;
    }
}

function draw_snake() {
    let i = 0;
    while (i < snake_arr.length) {
        document.getElementById(snake_arr[i].toString()).style.backgroundColor = "rgb(60, 60, 255)";
        i++;
    }
    direction_chanched = false;
}

function draw_pause_menu() {
    if (is_pause) {
        document.getElementById('pause').style.display = 'flex';
        document.getElementById('score').style.display = 'flex';
        document.getElementById('score').innerHTML = "Score: " + score + "<br>Hight Score: " + localStorage.getItem("score");

    }
    else {
        document.getElementById('pause').style.display = 'none';
        document.getElementById('score').style.display = 'none';
    }
}