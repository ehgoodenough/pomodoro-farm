export default class Clock {
    constructor() {
        this.time = 0
    }
    update(delta) {
        this.time += delta.s
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
