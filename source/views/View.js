import Preact from "preact"

import "views/View.less"

import InventoryMenu from "views/InventoryMenu.view.js"
import FarmPatch from "views/FarmPatch.view.js"

export default function View(props) {
    return (
        <div id="frame">
            <InventoryMenu game={props.game}/>
            {props.game.patches.map((patch) => (
                <FarmPatch patch={patch}/>
            ))}
        </div>
    )
}
