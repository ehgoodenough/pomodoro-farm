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

import Countdown from "scripts/model/Countdown.js"

var state = new Object({
    countdown: new Countdown(11 * 60 * 1000)
})

window.setInterval(function() {
    render.setState(state)
}, 1)

// Write/copy a frame for the gameplay.
// Fix up countdown to be updated by a delta.
// Make a loop that can switches between requestFrame and setInterval.
