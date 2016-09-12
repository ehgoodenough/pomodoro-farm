import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

var cockadoodledoo = [
    new Audio(require("sounds/cock-a-doodle-doo-1.mp3")),
    new Audio(require("sounds/cock-a-doodle-doo-2.mp3"))
]

var SECONDS = 1000
var MINUTES = 60 * SECONDS
var HOURS = 60 * MINUTES

class Pomodoro {
    constructor(start) {
        this.start = start || this.now
        this.length = length || 25 * MINUTES

        this.hasRung = this.time <= 0

        window.localStorage.start = this.start
    }
    get now() {
        return Date.now()
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
            if(this.time < -5 * 60 * 1000) {
                return "#C00"
            } else {
                return "#0C0"
            }
        }
    }
    get string() {
        var sign = this.time < 0 ? "-" : ""

        var minutes = Math.floor(Math.abs(this.time) / MINUTES)

        var seconds = Math.floor((Math.abs(this.time) % MINUTES) / SECONDS)
        seconds = (seconds < 10 ? "0" : "") + seconds

        var milliseconds = Math.floor(((Math.abs(this.time) % MINUTES) % SECONDS))
        milliseconds = (milliseconds < 100 ? "0" : "") + (milliseconds < 10 ? "0" : "") + milliseconds

        return sign + minutes + ":" + seconds + ":" + milliseconds
    }
}

class Game {
    constructor() {
        this.pomodoro = new Pomodoro(window.localStorage.start)
    }
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
