function zigzag () {
	
}
function cuadrado () {
    crono()
    while (false) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 106)
    }
}
input.onButtonPressed(Button.A, function () {
    if (ejecutar == "c") {
        ejecutar = "v"
    } else if (ejecutar == "v") {
        ejecutar = "z"
    } else if (ejecutar == "z") {
        ejecutar = "s"
    } else if (ejecutar == "s") {
        ejecutar = "c"
    }
})
function crono () {
    tiempo = 3000
    while (false) {
    	
    }
}
function circulo () {
	
}
function eses () {
	
}
let tiempo = 0
let ejecutar = ""
ejecutar = "c"
basic.forever(function () {
    if (ejecutar == "c") {
        cuadrado()
    }
    if (ejecutar == "v") {
        circulo()
    }
    if (ejecutar == "z") {
        zigzag()
    }
    if (ejecutar == "s") {
        eses()
    }
})
