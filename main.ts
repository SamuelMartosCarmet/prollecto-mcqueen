function zigzag () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
    }
    maqueen.motorStop(maqueen.Motors.All)
}
function cuadrado () {
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        basic.pause(2000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        basic.pause(600)
    }
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.A, function () {
    if (ejecutar == "c") {
        ejecutar = "v"
    } else if (ejecutar == "v") {
        ejecutar = "s"
    } else if (ejecutar == "s") {
        ejecutar = "z"
    } else if (ejecutar == "z") {
        ejecutar = "c"
    }
    basic.showString(ejecutar)
})
function circulo () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.B, function () {
    if (ejecutar == "c") {
        cuadrado()
    } else if (ejecutar == "v") {
        circulo()
    } else if (ejecutar == "s") {
        eses()
    } else if (ejecutar == "z") {
        zigzag()
    }
})
function eses () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(3000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        basic.pause(3000)
    }
    maqueen.motorStop(maqueen.Motors.All)
}
let ejecutar = ""
// Pongo esta variable porque me da pereza escribir siempre el mismo número
ejecutar = "c"
basic.showString(ejecutar)
