basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 500 && input.acceleration(Dimension.X) > -500) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.acceleration(Dimension.X) > 500 || input.acceleration(Dimension.X) < -500) {
        for (let index = 0; index < 2; index++) {
        	
        }
        if (input.acceleration(Dimension.Y) > 500 || input.acceleration(Dimension.Y) < -500) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
        }
    }
})
