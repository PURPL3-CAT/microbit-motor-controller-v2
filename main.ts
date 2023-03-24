let startingPower = 0 //Starting power for of the motor (0-1024)
let pinStep = 8 //By what step the buttons change the power (how fast  it changes)


let power = startingPower
basic.forever(function () {
    led.plotBarGraph(power, 1024)
    pins.analogWritePin(AnalogPin.P0, power)
    power = Math.constrain(power, 0, 1024)
    if (input.buttonIsPressed(Button.A)) {
        power += pinStep
    } else {
        if (input.buttonIsPressed(Button.B)) {
            power += -pinStep
        }
    }
})
