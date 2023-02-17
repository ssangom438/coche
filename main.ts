radio.onReceivedNumber(function (receivedNumber) {
    while (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        maqueen.motorStop(maqueen.Motors.M1)
    }
    basic.showIcon(IconNames.Yes)
    while (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    }
    if (receivedNumber == 3) {
        if (direccion == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        }
    }
})
let direccion = 0
radio.sendNumber(4)
direccion = 0
basic.forever(function () {
    radio.setGroup(130)
})
