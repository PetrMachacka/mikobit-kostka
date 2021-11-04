let walls = 6
let ready = false
basic.forever(function on_walls() {
    if (input.logoIsPressed()) {
        
        if (walls == 6) {
            basic.showNumber(10)
            walls = 10
        } else {
            basic.showNumber(6)
            walls = 6
        }
        
    }
    
})
basic.forever(function on_můžeš() {
    let můžeš: boolean;
    if (input.buttonIsPressed(Button.A)) {
        
        if (můžeš == false) {
            basic.showIcon(IconNames.Yes)
            můžeš = true
        }
        
    }
    
})
basic.forever(function on_forever() {
    let dots: number;
    let můžeš: boolean;
    
    if (můžeš == true) {
        if (input.isGesture(Gesture.Shake)) {
            dots = randint(1, walls)
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
                basic.showIcon(IconNames.SmallHeart)
            } else if (dots == 7) {
                basic.showIcon(IconNames.Happy)
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
            můžeš = false
        }
        
    }
    
})
