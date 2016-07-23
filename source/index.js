/////////////
// Render //
///////////

import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/render/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

////////////
// Model //
//////////

import Game from "scripts/model/Game.js"

var state = new Object({
    game: new Game(),
})

if(STAGE == "DEVELOPMENT") {
    window.game = state.game
    window.state = state
}

import Loop from "scripts/Loop.js"

Loop(function(delta) {
    state.game.update(delta)
    render.setState(state)
})

// Fix up countdown to be updated by a delta.
// Write/copy a frame that doesn't screw up for big sizes.
// Make a loop that can switches between requestFrame and setInterval.
