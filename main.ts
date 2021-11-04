let sides = 6
let ready = false
basic.forever(function on_walls() {
    if (input.logoIsPressed()) {
        
        if (sides == 6) {
            sides = 10
        } else {
            sides = 6
        }
        
        basic.showNumber(sides)
    }
    
})
basic.forever(function on_můžeš() {
    if (input.buttonIsPressed(Button.A)) {
        
        if (ready == false) {
            basic.showIcon(IconNames.Yes)
            ready = true
        }
        
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
                basic.showIcon(IconNames.SmallDiamond)
            } else if (dots == 5) {
                basic.showLeds("# . . . #. . . . .. . # . .. . . . .# . . . #")
            } else if (dots == 6) {
                basic.showLeds("# . . . # . . . . .# . . . #. . . . .# . . . #")
            } else if (dots == 7) {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    # . # . #
                    . . . . .
                    # . . . #
                    `)
            } else if (dots == 8) {
                basic.showIcon(IconNames.SmallSquare)
            } else if (dots == 9) {
                basic.showIcon(IconNames.No)
            } else if (dots == 10) {
                basic.showIcon(IconNames.Tortoise)
            }
            
            for (let i = 0; i < dots; i++) {
                music.playTone(Note.D, music.beat())
                music.rest(music.beat(1.5))
            }
            ready = false
        }
        
    }
    
})
