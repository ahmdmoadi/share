def on_button_pressed_a():
    basic.show_string("Baker")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    while True:
        basic.show_icon(IconNames.HEART)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_string("Hamode")
input.on_button_pressed(Button.B, on_button_pressed_b)
