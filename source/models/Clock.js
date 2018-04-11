export default class Clock {
    constructor() {
        this.maxtime = 5 * 60
        this.time = this.maxtime
    }
    update(delta) {
        this.time -= delta.s
    }
    play() {
        // ...
    }
    pause() {
        // ...
    }
    stop() {
        // ....
    }
    set(time) {
        // ......
    }
    tweak(time) {
        // both positive and negative
    }
    get timestring() {
        let minutes = Math.floor(this.time / 60)
        let seconds = Math.floor(this.time % 60)
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    }
}

// 0:00 -> 12:00 (25 minutes)
// 12:00 -> 24:00 (5/10 minutes)
