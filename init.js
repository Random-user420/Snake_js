let apple = [];
apple = create_apple();
let score = 0;
set_high_score(); //to set a score to read, if this is run for the first time in the browser
let speed = 150;

draw_initaial_field();
let Interval = setInterval(main_loop, speed);
draw_snake();
pause();
