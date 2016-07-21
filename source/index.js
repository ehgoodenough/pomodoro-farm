import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/render/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

import Countdown from "scripts/model/Countdown.js"

var state = new Object({
    countdown: new Countdown(1 * 60 * 1000)
})

window.setInterval(function() {
    render.setState(state)
}, 1)
