radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
    	
    }
    if (receivedString == "backward") {
    	
    }
    if (receivedString == "right") {
    	
    }
    if (receivedString == "left") {
    	
    }
    if (receivedString == "stop") {
    	
    }
    if (receivedString == "happy") {
    	
    }
    if (receivedString == "heart") {
    	
    }
    if (receivedString == "leftled") {
    	
    }
    if (receivedString == "rightled") {
    	
    }
})
radio.setGroup(42069)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Purple))
