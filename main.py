sides = 6
ready = False
def on_walls():
    if input.button_is_pressed(Button.A):
        global sides
        if sides < 32:
            sides += 1
        basic.show_number(sides)

input.on_button_pressed(Button.A, on_walls)

def on_můžeš():
    global ready
    if ready == False:
        basic.show_icon(IconNames.YES)
        ready = True
input.on_logo_event(TouchButtonEvent.PRESSED, on_můžeš)
def on_forever():
        global ready, sides
        if ready == True:
            if input.is_gesture(Gesture.SHAKE):
                dots = randint(1, sides)
                if dots == 1:
                    basic.show_leds(""". . . . .. . . . .. . # . .. . . . .. . . . . """)
                elif dots == 2:
                    basic.show_leds(""". . . . . . . . . .. # . # .. . . . .. . . . .""")
                elif dots == 3:
                    basic.show_leds(""". . . . # . . . . .. . # . .. . . . .# . . . .""")
                elif dots == 4:
                    basic.show_leds("""# . . . #. . . . .. . . . .. . . . .# . . . #""")
                elif dots == 5:
                    basic.show_leds("""# . . . #. . . . .. . # . .. . . . .# . . . #""")
                elif dots == 6:
                    basic.show_leds("""# . . . # . . . . .# . . . #. . . . .# . . . #""")
                elif dots == 7:
                    basic.show_leds("""# . . . #. . . . .# . # . #. . . . .# . . . #""")
                elif dots == 8:
                    basic.show_icon(IconNames.SMALL_SQUARE)
                elif dots == 9:
                    basic.show_icon(IconNames.NO)
                elif dots == 10:
                    basic.show_icon(IconNames.TORTOISE)
                elif dots == 11:
                    basic.show_number(11)
                elif dots == 12:
                    basic.show_number(12)
                elif dots == 13:
                    basic.show_number(13)
                elif dots == 14:
                    basic.show_number(14)
                for i in range(dots):
                    music.play_tone(Note.D, music.beat())
                    music.rest(music.beat(1.5))
                ready = False
basic.forever(on_forever)