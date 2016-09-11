import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

var cockadoodledoo = [
    new Audio(require("sounds/cock-a-doodle-doo-1.mp3")),
    new Audio(require("sounds/cock-a-doodle-doo-2.mp3"))
]

class Pomodoro {
    constructor() {
        this.start = this.now
        this.length = 10 * 1000

        this.hasRung = false
    }
    get now() {
        return window.performance.now()
    }
    get time() {
        return this.length - (this.now - this.start)
    }
    update(delta) {
        if(this.time <= 0) {
            if(!this.hasRung) {
                this.hasRung = true
                cockadoodledoo[0].volume = 0.1
                cockadoodledoo[0].play()
            }
        }
    }
    get color() {
        if(this.time >= 0) {
            return "#FFF"
        } else {
            if(this.time < -5 * 1000) {
                return "#C00"
            } else {
                return "#0C0"
            }
        }
    }
    get string() {
        return (this.time / 1000).toFixed(3)
        var minutes = Math.floor(this.time / (1000 * 60))
        var seconds = Math.floor(this.time / 1000) % 60
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
        // TODO: Include the milliseconds when rendering the timer.
        // TODO: Return how long it's been since the timer rang.
    }
}

class Game {
    startPomodoro() {
        this.pomodoro = new Pomodoro()
    }
    update(delta) {
        if(this.pomodoro != undefined) {
            if(this.pomodoro.update instanceof Function) {
                this.pomodoro.update(delta)
            }
        }
    }
}

window.game = new Game()

var Loop = function(functionality) {
    var oldnow = window.performance.now()
    window.setInterval(function() {
        var newnow = window.performance.now()
        var delta = newnow - oldnow
        functionality(delta)
        oldnow = newnow
    }, 1000 / 60)
}

var loop = Loop(function(delta) {
    game.update(delta)
    render.setState({
        game: game
    })
})

// cockadoodledoo at end of timer
