walls = 6
ready = False
def on_walls():
    if input.logo_is_pressed():
        global walls
        if walls == 6:
            basic.show_number(10)
            walls = 10
        else:
            basic.show_number(6)
            walls = 6
basic.forever(on_walls)
def on_můžeš():
    if input.button_is_pressed(Button.A):
            global ready
            if můžeš == False:
                basic.show_icon(IconNames.YES)
                můžeš = True
basic.forever(on_můžeš)
def on_forever():
        global ready, walls
        if můžeš == True:
            if input.is_gesture(Gesture.SHAKE):
                dots = randint(1, walls)
                if dots == 1:
                    basic.show_leds(""". . . . .. . . . .. . # . .. . . . .. . . . . """)
                elif dots == 2:
                    basic.show_leds(""". . . . . . . . . .. # . # .. . . . .. . . . .""")
                elif dots == 3:
                    basic.show_leds(""". . . . # . . . . .. . # . .. . . . .# . . . .""")
                elif dots == 4:
                    basic.show_icon(IconNames.SMALL_DIAMOND)
                elif dots == 5:
                    basic.show_leds("""# . . . #. . . . .. . # . .. . . . .# . . . #""")
                elif dots == 6:
                    basic.show_icon(IconNames.SMALL_HEART)
                elif dots == 7:
                    basic.show_icon(IconNames.HAPPY)
                elif dots == 8:
                    basic.show_icon(IconNames.SMALL_SQUARE)
                elif dots == 9:
                    basic.show_icon(IconNames.NO)
                elif dots == 10:
                    basic.show_icon(IconNames.TORTOISE)
                for i in range(dots):
                    music.play_tone(Note.D, music.beat())
                    music.rest(music.beat(1.5))
                můžeš = False
basic.forever(on_forever)