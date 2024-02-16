function main_loop() {
    draw_new_field_over_snake();
    check_apple();
    move_snake();
    if (check_colition()) {
        end();
    }
    draw_apple();
    draw_snake();
}