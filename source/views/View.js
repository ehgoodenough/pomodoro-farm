import Preact from "preact"

import "views/View.less"

import InventoryMenu from "views/InventoryMenu.view.js"
import FarmPatch from "views/FarmPatch.view.js"
import Layer from "views/Layer.view.js"
import Sky from "views/Sky.view.js"

export default class View {
    render() {
        return (
            <div id="frame">
                <Sky time={this.props.game.time}/>
                {this.props.game.layers.map((layer) => (
                    <Layer layer={layer}/>
                ))}
            </div>
        )
        // <div id="block"/>
        // <InventoryMenu game={props.game}/>
        // {props.game.layers.map((layer) => (
        //     <Layer layer={layer}/>
        // ))}
        // {props.game.patches.map((patch) => (
        //     <FarmPatch patch={patch}/>
        // ))}
    }
    get style() {
        return {
            background: BACKGROUNDS[Math.floor(this.props.game.time)],
            background: BACKGROUNDS[8]
        }
    }
}
