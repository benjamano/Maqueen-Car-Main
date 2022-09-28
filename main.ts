radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (receivedString == "backward") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
    if (receivedString == "right") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (receivedString == "left") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    }
    if (receivedString == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedString == "happy") {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedString == "heart") {
        basic.showIcon(IconNames.Heart)
    }
    if (receivedString == "leftled") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
    if (receivedString == "rightled") {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
radio.setGroup(42069)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Purple))
