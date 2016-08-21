import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

class Pomodoro {
    constructor() {
        console.log("starting pomodoro")
        this.time = 25 * 1000
    }
    update(delta) {
        this.time -= delta
        if(this.time <= 0) {
            console.log("done!")
        } else {
            console.log(this.time)
        }
    }
}

class Game {
    startPomodoro() {
        this.pomodoro = new Pomodoro()
    }
    update(delta) {
        if(this.pomodoro != undefined) {
            this.pomodoro.update(delta)
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

// start/stop button, timer text
// cockadoodledoo at end of timer
