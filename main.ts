function base () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 0, NeoPixelMode.RGB)
strip.setBrightness(5)
basic.forever(function () {
    for (let index = 0; index <= 25; index++) {
        strip.setBrightness(0 * 0)
    }
})
