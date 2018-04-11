import Preact from "preact"

import "views/View.less"

import Frame from "views/Frame.view.js"
import Sky from "views/Sky.view.js"
import Clock from "views/Clock.view.js"

import InventoryMenu from "views/InventoryMenu.view.js"
import FarmPatch from "views/FarmPatch.view.js"
import Layer from "views/Layer.view.js"

export default class View {
    render() {
        return (
            <Frame>
                <Sky clock={this.props.game.clock}/>
                <Clock clock={this.props.game.clock}/>
                {this.props.game.layers.map((layer) => (
                    <Layer layer={layer}/>
                ))}
            </Frame>
        )
        // <div id="block"/>
        // <InventoryMenu game={props.game}/>
        // {props.game.patches.map((patch) => (
        //     <FarmPatch patch={patch}/>
        // ))}
    }
}
