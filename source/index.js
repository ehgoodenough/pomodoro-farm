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

class Game {
    constructor() {
        this.tiles = {
            "0x0": {
                position: {x: 0, y: 0},
                color: "#C00"
            },
            "0x1": {
                position: {x: 0, y: 1},
                color: "#C00"
            },
        }
        this.camera = {
            position: {x: 0, y: 0}
        }
    }
}

class Frame {
    constructor() {
        this.width = 360
        this.height = 480
        this.color = "#222"
    }
}

var state = new Object({
    frame: new Frame(),
    game: new Game(),
})

import Loop from "scripts/Loop.js"

Loop(function(delta) {
    render.setState(state)
})

// Fix up countdown to be updated by a delta.
// Write/copy a frame that doesn't screw up for big sizes.
// Make a loop that can switches between requestFrame and setInterval.
