import Preact from "preact"

import Strings from "data/Strings.js"
import "views/InventoryMenu.view.less"

export default function InventoryMenu(props) {
    return (
        <menu className="InventoryMenu">
            <label className="InventoryLabel">
                {Strings["INVENTORY_LABEL"] + ":"}
            </label>
            {Object.values(props.game.items).map((item) => {
                if(item.amount !== null) {
                    return (
                        <span className="Item InventoryOption"
                            onClick={() => item.onSelect()}
                            style={{"color": item.isSelected ? "red" : "white"}}>
                            <label>{item.label}</label>
                        </span>
                    )
                }
            })}
            {props.game.selectedItem !== undefined && (
                <span className="InventoryOption"
                    onClick={() => props.game.selectedItem = undefined}
                    style={{"color": "#AAA"}}>
                    <label>{"<cancel>"}</label>
                </span>
            )}
            {props.game.gold !== undefined && (
                <span className="GoldCount">
                    {props.game.gold} gold
                </span>
            )}
        </menu>
    )
}
