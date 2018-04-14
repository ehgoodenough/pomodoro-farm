import Preact from "preact"
import Yaafloop from "yaafloop"
import Statgrab from "statgrab/do"

import View from "views/View.js"
import Game from "models/Game.js"

let game = new Game()

let mount = Preact.render(<View game={game}/>, document.body)

let loop = new Yaafloop((delta) => {
    game.update(delta)
    Preact.render(<View game={game}/>, document.body, mount)
})

const FPS = 60
const CAP = 1000
let now = undefined
let loop2 = window.setInterval(() => {
    let delta = Math.min(window.performance.now() - (now || 0), CAP)
    delta = {
        "ms": delta, // in milliseconds
        "s": delta / 1000, // in seconds
        "f": delta / (1000 / FPS), // in frames
    }

    game.clock.update(delta)
    document.title = game.clock.timestring + " - Pomodoro Farm"

    now = window.performance.now()
}, 1)
