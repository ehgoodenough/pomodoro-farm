import Preact from "preact"

import "views/View.less"

import InventoryMenu from "views/InventoryMenu.view.js"

export default function View(props) {
    return (
        <div id="frame">
            <InventoryMenu game={props.game}/>
            <div className="Farm">
                {props.game.patches.map((patch) => (
                    <FarmPatch patch={patch}/>
                ))}
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
            {!props.patch.isHarvestable && !props.patch.isWatered && !props.patch.isSeeded && (<label>empty<br/>patch</label>)}
        </div>
    )
}

// TODO: dirt patch view
// TODO: inventory equips a thing
// TODO: clicking on dirt patch with item does thing
// TODO: waiting time does thing to dirt patch things
// TODO: can click on dirt patches that are harvestable
// ...
// TODO: scroll over to store view
// TODO: sell things at store
// TODO: buy things at store!!!
