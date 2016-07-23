import React from "react"

import DATA from "scripts/data/DATA.js"

export default class Tile extends React.Component {
    render() {
        return (
            <div style={this.style} onClick={this.onClick.bind(this)}/>
        )
    }
    get style() {
        return {
            position: "absolute",
            width: DATA.TILE.WIDTH + "px",
            height: DATA.TILE.HEIGHT + "px",
            left: this.props.tile.position.x * DATA.TILE.WIDTH + "px",
            top: this.props.tile.position.y * DATA.TILE.HEIGHT + "px",
            backgroundColor: this.props.tile.color,
        }
    }
    onClick() {
        if(this.props.tile.onClick) {
            this.props.tile.onClick()
        }
    }
}
