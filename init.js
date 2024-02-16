const main_gr =  document.getElementById("main-grid");
const zeilen = 33;
const spalten = Math.floor(((window.innerWidth/window.innerHeight)*33.333333)*0.9);
let snake_arr = [[3,1], [1,1], [2,1]];
let direction = [1,0];
let direction_chanched = false;
let eaten_apple = false;
let apple = [];
apple = create_apple();
let is_pause = false;

draw_initaial_field();
let Interval = setInterval(main_loop, 100);