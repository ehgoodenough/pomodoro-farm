import React from "react"

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
            top: this.props.camera.position.y + (480 / 2) - (32 / 2) + "px",
            left: this.props.camera.position.x + (360 / 2) - (32 / 2) + "px",
        }
    }
}
