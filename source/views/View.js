import Preact from "preact"

import "views/View.less"

import InventoryMenu from "views/InventoryMenu.view.js"

export default function View(props) {
    return (
        <div id="frame">
            <InventoryMenu items={props.game.items || []}/>
            <div className="Farm">
                <div className="FarmPatch"/>
                <div className="FarmPatch"/>
                <div className="FarmPatch"/>
                <div className="FarmPatch"/>
                <div className="FarmPatch"/>
            </div>
        </div>
    )
}

// TODO: dirt patch view
// TODO: inventory equips a thing
// TODO: clicking on dirt patch with item does thing
// TODO: waiting time does thing to dirt patch things
// TODO: can click on dirt patches that are harvestable
// TODO: scroll over to store view
// TODO: sell things at store
// TODO: buy things at store!!!
