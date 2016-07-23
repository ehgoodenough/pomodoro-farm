import React from "react"

const TILE_WIDTH = 32
const TILE_HEIGHT = 32

export default class Tile extends React.Component {
    render() {
        return (
            <div style={this.style}/>
        )
    }
    get style() {
        return {
            position: "absolute",
            width: TILE_WIDTH + "px",
            height: TILE_HEIGHT + "px",
            left: this.props.tile.position.x * TILE_WIDTH + "px",
            top: this.props.tile.position.y * TILE_HEIGHT + "px",
            backgroundColor: this.props.tile.color,
        }
    }
}
