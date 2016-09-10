import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

class Pomodoro {
    constructor() {
        this.time = 10 * 1000 // 25 * 60 * 1000
    }
    update(delta) {
        this.time -= delta
        if(this.time <= 0) {
            this.time = 0
        }
    }
    toString() {
        var minutes = Math.floor(this.time / (1000 * 60))
        var seconds = Math.floor(this.time / 1000) % 60
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
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
                if(this.pomodoro.time == 0) {
                    delete this.pomodoro
                }
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
