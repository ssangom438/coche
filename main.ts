radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    }
    if (receivedNumber == 3) {
        if (direccion == 0) {
            direccion = 1
        }
        if (direccion == 1) {
            direccion = 2
        }
        if (direccion == 2) {
            direccion = 0
        }
    }
})
let direccion = 0
direccion = 1
radio.setGroup(130)
basic.forever(function () {
    if (direccion == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    }
    if (direccion == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
    }
    if (direccion == 1) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
