import Preact from "preact"

import "views/View.less"

import InventoryMenu from "views/InventoryMenu.view.js"

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

function FarmPatch(props) {
    return (
        <div className={"FarmPatch" + (props.patch.canInteract ? " canInteract" : "")}
            onClick={(event) => props.patch.onInteract(event)}>
            {props.patch.isSeeded && (<label>seeded</label>)}
            {props.patch.isWatered && (<label>watered</label>)}
            {props.patch.isHarvestable && (<label className="isHarvestable">harvest!!</label>)}
            {!props.patch.isHarvestable && !props.patch.isWatered && !props.patch.isSeeded && (<label className="isEmpty">empty<br/>patch</label>)}
        </div>
    )
}

function Shop(props) {
    return (
        <div className="Shop">
            <h2>welcome to the shop!</h2>
            <ul>
                <li onClick={() => props.game.sell()}><label>[sell 1 <u>crop</u> for 30 gold]</label></li>
                <li onClick={() => props.game.buy()}><label>[buy 1 <u>seed</u> for 15 gold]</label></li>
            </ul>
        </div>
    )
}
