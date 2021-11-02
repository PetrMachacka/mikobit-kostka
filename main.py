stěny = 6
můžeš = False
def on_stěny():
    if input.logo_is_pressed():
        global stěny
        if stěny == 6:
            basic.show_number(10)
            stěny = 10
        else:
            basic.show_number(6)
            stěny = 6
basic.forever(on_stěny)
def on_můžeš():
    if input.button_is_pressed(Button.A):
            global můžeš
            if můžeš == False:
                basic.show_icon(IconNames.YES)
                můžeš = True
basic.forever(on_můžeš)
def on_forever():
        global můžeš, stěny
        if můžeš == True:
            if input.is_gesture(Gesture.SHAKE):
                tecky = randint(1, stěny)
                if tecky == 1:
                    basic.show_leds(""". . . . .
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    . . . . . """)
                elif tecky == 2:
                    basic.show_leds(""". . . . .
                                    . . . . .
                                    . # . # .
                                    . . . . .
                                    . . . . .""")
                elif tecky == 3:
                    basic.show_leds(""". . . . #
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    # . . . .""")
                elif tecky == 4:
                    basic.show_icon(IconNames.SMALL_DIAMOND)
                elif tecky == 5:
                    basic.show_icon(IconNames.YES)
                elif tecky == 6:
                    basic.show_icon(IconNames.SMALL_HEART)
                elif tecky == 7:
                    basic.show_icon(IconNames.HAPPY)
                elif tecky == 8:
                    basic.show_icon(IconNames.SMALL_SQUARE)
                elif tecky == 9:
                    basic.show_icon(IconNames.NO)
                elif tecky == 10:
                    basic.show_icon(IconNames.TORTOISE)
                for i in range(tecky):
                    music.play_tone(Note.D, music.beat(3))
                    music.rest(music.beat(1.5))
                můžeš = False
basic.forever(on_forever)