import Preact from "preact"

import "views/FarmPatch.view.less"

export default function FarmPatch(props) {
    return (
        <div className={"FarmPatch" + (props.patch.canInteract ? " canInteract" : "")}
            onClick={(event) => props.patch.onInteract(event)}
            style={{"left": props.patch.position.x + "em", "top": props.patch.position.y + "em"}}>
            {props.patch.isSeeded && (<label>seeded</label>)}
            {props.patch.isWatered && (<label>watered</label>)}
            {props.patch.isHarvestable && (<label className="isHarvestable">harvest!!</label>)}
            {!props.patch.isHarvestable && !props.patch.isWatered && !props.patch.isSeeded && (<label className="isEmpty">empty<br/>patch</label>)}
        </div>
    )
}
