import React from "react"

import DATA from "scripts/data/DATA.js"

export default class Camera extends React.Component {
    render() {
        return (
            <div style={this.style}>
                {this.props.children}
            </div>
        )
    }
    get style() {
        return {
            position: "absolute",
            left: this.props.camera.position.x + (DATA.FRAME.WIDTH / 2) - (DATA.TILE.WIDTH / 2) + "px",
            top: this.props.camera.position.y + (DATA.FRAME.HEIGHT / 2) - (DATA.TILE.HEIGHT / 2) + "px",
        }
    }
}
