let y = 0
let x = randint(0, 4)
led.plot(x, y)
basic.forever(function () {
    while (y < 5) {
        basic.pause(100)
        led.stopAnimation()
        led.unplot(x, y)
        led.plotBrightness(x, y, 200)
        y += 1
        led.plot(x, y)
        if (led.point(x, 2)) {
            led.plotBrightness(x, 1, 210)
            led.plotBrightness(x, 0, 105)
        }
        if (led.point(x, 3)) {
            led.plotBrightness(x, 2, 210)
            led.plotBrightness(x, 1, 105)
            led.plotBrightness(x, 0, 25)
        }
        if (led.point(x, 4)) {
            led.plotBrightness(x, 3, 210)
            led.plotBrightness(x, 2, 105)
            led.plotBrightness(x, 1, 25)
        }
    }
    led.unplot(x, y)
    y = 0
    x = randint(0, 4)
    led.plot(x, y)
})
