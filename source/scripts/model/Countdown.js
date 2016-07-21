export default class Countdown {
    constructor(duration) {
        this.duration = duration

        this.start = this.now
    }
    get end() {
        return this.start + this.duration
    }
    get time() {
        return this.end - this.now
    }
    get isEnded() {
        return this.end <= this.now
    }
    get now() {
        return this.mocknow || Date.now()
    }
}



var Expect = require("expect.js")

var DURATION = 5
var countdown = new Countdown(DURATION)
expect(countdown.end).to.be(countdown.start + DURATION)

countdown.mocknow = countdown.start
expect(countdown.time).to.be(5)
expect(countdown.isEnded).to.be(false)

countdown.mocknow += 1
expect(countdown.time).to.be(4)
expect(countdown.isEnded).to.be(false)

countdown.mocknow += 1
expect(countdown.time).to.be(3)
expect(countdown.isEnded).to.be(false)

countdown.mocknow += 1
expect(countdown.time).to.be(2)
expect(countdown.isEnded).to.be(false)

countdown.mocknow += 1
expect(countdown.time).to.be(1)
expect(countdown.isEnded).to.be(false)

countdown.mocknow += 1
expect(countdown.time).to.be(0)
expect(countdown.isEnded).to.be(true)

countdown.mocknow += 1
expect(countdown.isEnded).to.be(true)
expect(countdown.time).to.be(-1)
