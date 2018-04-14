export default class Clock {
    constructor(clock) {
        this.game = clock.game

        this.maxtime = 1 * 60
        this.time = 0
    }
    update(delta) {
        this.time -= delta.s

        if(this.time <= 0
        && this.hasStarted == true
        && this.hasEnded != true) {
            this.hasEnded = true

            this.game.doThings()
        }
    }
    reset() {
        this.hasStarted = true
        this.hasEnded = false
        this.time = this.maxtime
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
        let minutes = Math.max(0, Math.floor(this.time / 60))
        let seconds = Math.max(0, Math.floor(this.time % 60))
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    }
}

// 0:00 -> 12:00 (25 minutes)
// 12:00 -> 24:00 (5/10 minutes)
