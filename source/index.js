import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

var state = new Object()

var Loop = function(functionality) {
    window.setInterval(function() {
        functionality()
    }, 1000 / 60)
}

var loop = Loop(function(delta) {
    render.setState(state)
})

// start/stop button, timer text
// cockadoodledoo at end of timer
