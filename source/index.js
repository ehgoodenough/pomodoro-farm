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
    frame: {width: 360, height: 360},
    countdown: new Countdown(11 * 60 * 1000)
})

import Loop from "scripts/Loop.js"

Loop(function(delta) {
    render.setState(state)
})

// Fix up countdown to be updated by a delta.
// Write/copy a frame that doesn't screw up for big sizes.
// Make a loop that can switches between requestFrame and setInterval.
