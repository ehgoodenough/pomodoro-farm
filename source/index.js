import Preact from "preact"
import Yaafloop from "yaafloop"
import Statgrab from "statgrab"

import View from "views/View.js"
import Game from "models/Game.js"

let game = new Game()

let mount = Preact.render(<View game={game}/>, document.body)

let loop = new Yaafloop((delta) => {
    game.update(delta)
    Preact.render(<View game={game}/>, document.body, mount)
})
