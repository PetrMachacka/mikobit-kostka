let sides = 6
let ready = false
input.onButtonPressed(Button.A, function on_walls() {
    if (input.buttonIsPressed(Button.A)) {
        
        if (sides < 32) {
            sides += 1
        }
        
        basic.showNumber(sides)
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_můžeš() {
    
    if (ready == false) {
        basic.showIcon(IconNames.Yes)
        ready = true
    }
    
})
basic.forever(function on_forever() {
    let dots: number;
    
    if (ready == true) {
        if (input.isGesture(Gesture.Shake)) {
            dots = randint(1, sides)
            if (dots == 1) {
                basic.showLeds(". . . . .. . . . .. . # . .. . . . .. . . . . ")
            } else if (dots == 2) {
                basic.showLeds(". . . . . . . . . .. # . # .. . . . .. . . . .")
            } else if (dots == 3) {
                basic.showLeds(". . . . # . . . . .. . # . .. . . . .# . . . .")
            } else if (dots == 4) {
                basic.showLeds("# . . . #. . . . .. . . . .. . . . .# . . . #")
            } else if (dots == 5) {
                basic.showLeds("# . . . #. . . . .. . # . .. . . . .# . . . #")
            } else if (dots == 6) {
                basic.showLeds("# . . . # . . . . .# . . . #. . . . .# . . . #")
            } else if (dots == 7) {
                basic.showLeds("# . . . #. . . . .# . # . #. . . . .# . . . #")
            } else if (dots == 8) {
                basic.showIcon(IconNames.SmallSquare)
            } else if (dots == 9) {
                basic.showIcon(IconNames.No)
            } else if (dots == 10) {
                basic.showIcon(IconNames.Tortoise)
            } else if (dots == 11) {
                basic.showNumber(11)
            } else if (dots == 12) {
                basic.showNumber(12)
            } else if (dots == 13) {
                basic.showNumber(13)
            } else if (dots == 14) {
                basic.showNumber(14)
            }
            
            for (let i = 0; i < dots; i++) {
                music.playTone(Note.D, music.beat())
                music.rest(music.beat(1.5))
            }
            ready = false
        }
        
    }
    
})
