let stěny = 6
let můžeš = false
basic.forever(function on_stěny() {
    if (input.logoIsPressed()) {
        
        if (stěny == 6) {
            basic.showNumber(10)
            stěny = 10
        } else {
            basic.showNumber(6)
            stěny = 6
        }
        
    }
    
})
basic.forever(function on_můžeš() {
    if (input.buttonIsPressed(Button.A)) {
        
        if (můžeš == false) {
            basic.showIcon(IconNames.Yes)
            můžeš = true
        }
        
    }
    
})
basic.forever(function on_forever() {
    let tecky: number;
    
    if (můžeš == true) {
        if (input.isGesture(Gesture.Shake)) {
            
            tecky = randint(1, stěny)
            if (tecky == 1) {
                basic.showLeds(`. . . . .
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    . . . . . `)
            } else if (tecky == 2) {
                basic.showLeds(`. . . . .
                                    . . . . .
                                    . # . # .
                                    . . . . .
                                    . . . . .`)
            } else if (tecky == 3) {
                basic.showLeds(`. . . . #
                                    . . . . .
                                    . . # . .
                                    . . . . .
                                    # . . . .`)
            } else if (tecky == 4) {
                basic.showIcon(IconNames.SmallDiamond)
            } else if (tecky == 5) {
                basic.showIcon(IconNames.Yes)
            } else if (tecky == 6) {
                basic.showIcon(IconNames.SmallHeart)
            } else if (tecky == 7) {
                basic.showIcon(IconNames.Happy)
            } else if (tecky == 8) {
                basic.showIcon(IconNames.SmallSquare)
            } else if (tecky == 9) {
                basic.showIcon(IconNames.No)
            } else if (tecky == 10) {
                basic.showIcon(IconNames.Tortoise)
            }
            
            for (let i = 0; i < tecky; i++) {
                music.playTone(Note.D, music.beat(3))
                music.rest(music.beat(1.5))
            }
            můžeš = false
        }
        
    }
    
})
