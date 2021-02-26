import json
import notecard
from periphery import I2C
import time

print("Configuring Notecard...")

productUID = "com.blues.bsatrom:notecade"

port = I2C("/dev/i2c-1")
card = notecard.OpenI2C(port, 0, 0, debug=True)
print("Notecard connection active...")

req = {"req": "hub.set"}
req["product"] = productUID
req["mode"] = "continuous"
req["outbound"] = 60
req["inbound"] = 240
req["align"] = True

card.Transaction(req)
