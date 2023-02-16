radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        rad1()
    }
    if (receivedNumber == 2) {
        rad2()
    }
    if (receivedNumber == 3) {
        rad3()
    }
})
function rad1 () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
}
function rad3 () {
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
function rad2 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
}
let direccion = 0
let Velocidad = 0
direccion = 1
radio.setGroup(130)
basic.forever(function () {
    if (direccion == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
    if (direccion == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    }
    if (direccion == 1) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
