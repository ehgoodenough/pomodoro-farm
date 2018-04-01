import Preact from "preact"

import "views/View.less"

import InventoryMenu from "views/InventoryMenu.view.js"
import FarmPatch from "views/FarmPatch.view.js"
import Shop from "views/Shop.view.js"

export default function View(props) {
    return (
        <div id="frame">
            <div id="game">
                <InventoryMenu game={props.game}/>
                <div className="Farm">
                    {props.game.patches.map((patch) => (
                        <FarmPatch patch={patch}/>
                    ))}
                </div>
                <Shop game={props.game}/>
            </div>
        </div>
    )
}
