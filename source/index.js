/////////////
// Render //
///////////

import React from "react"
import ReactDOM from "react-dom"

import Mount from "scripts/Mount.js"

var render = ReactDOM.render(<Mount/>, document.getElementById("mount"))

////////////
// State //
//////////

var state = new Object()

if(STAGE === "DEVELOPMENT") {
    window.state = state
}

import Loop from "scripts/Loop.js"
import Input from "scripts/Input.js"

var loop = Loop(function(delta) {
    render.setState(state)
})
