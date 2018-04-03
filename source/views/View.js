import Preact from "preact"

import "views/View.less"

import InventoryMenu from "views/InventoryMenu.view.js"
import FarmPatch from "views/FarmPatch.view.js"
import Layer from "views/Layer.view.js"

export default function View(props) {
    return (
        <div id="frame">
            <div id="block"/>
            <InventoryMenu game={props.game}/>
            {props.game.layers.map((layer) => (
                <Layer layer={layer}/>
            ))}
            {props.game.patches.map((patch) => (
                <FarmPatch patch={patch}/>
            ))}
        </div>
    )
}
