from gpiozero import Button, LED
import requests
import time
import json

btn = Button(26)
ledR = LED(16)
ledY = LED(20)
ledG = LED(21)

def fetchData()
    r = requests.get('http://servup.herokuapp.com/collections/mouse/588cc9385978')
    x = json.loads(r.content)

    if x['red'] == True:
        ledR.on()
    else:
        ledR.off()
    if x['yellow'] == True:
        ledY.on()
    else:
        ledY.off()
    if x['green'] == True:
        ledG.on()
    else:
        ledG.off()
    time.sleep(4)

while True:
    fetchData()
