import React from "react"

import Frame from "scripts/render/Frame.js"
import Camera from "scripts/render/Camera.js"
import Tile from "scripts/render/Tile.js"

export default class Mount extends React.Component {
    render() {
        if(!!this.state) {
            return (
                <Frame frame={this.state.frame}>
                    <Camera camera={this.state.game.camera}>
                        {this.state.game.tiles.map((tile, key) => {
                            return <Tile tile={tile} key={key}/>
                        })}
                    </Camera>
                </Frame>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}
