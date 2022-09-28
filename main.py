def on_received_string(receivedString):
    if receivedString == "forward":
        pass
    if receivedString == "backward":
        pass
    if receivedString == "right":
        pass
    if receivedString == "left":
        pass
    if receivedString == "stop":
        pass
    if receivedString == "happy":
        pass
    if receivedString == "heart":
        pass
    if receivedString == "leftled":
        pass
    if receivedString == "rightled":
        pass
radio.on_received_string(on_received_string)

radio.set_group(42069)