import React from "react"

import DATA from "scripts/DATA.js"

export default class Frame extends React.Component {
    render() {
        return (
            <div className="frame" style={this.style}>
                {this.props.children}
            </div>
        )
    }
    get style() {
        return {
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            margin: "auto",
            position: "fixed",
            overflow: "hidden",
            width: DATA.FRAME.WIDTH + "px",
            height: DATA.FRAME.HEIGHT + "px",
            backgroundColor: DATA.FRAME.COLOR,
            transform: "scale(" + this.scale + ")",
            transformOrigin: "center",
        }
    }
    get scale() {
        return Math.min(
            window.innerWidth / DATA.FRAME.WIDTH,
            window.innerHeight / DATA.FRAME.HEIGHT
        )
    }
}
