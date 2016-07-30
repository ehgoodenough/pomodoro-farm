import React from "react"

import DATA from "scripts/data/DATA.js"

export default class Plant extends React.Component {
    render() {
        return (
            <div style={this.style}/>
        )
    }
    get style() {
        return {
            bottom: "0px",
            position: "absolute",
            width: DATA.TILE.WIDTH,
            height: DATA.TILE.HEIGHT,
            backgroundImage: "url(" + this.props.plant.image + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100%",
        }
    }
}
