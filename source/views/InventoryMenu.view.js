import Preact from "preact"

import Strings from "data/Strings.js"
import "views/InventoryMenu.view.less"

export default function InventoryMenu(props) {
    return (
        <menu className="InventoryMenu">
            <label className="InventoryLabel">
                {Strings["INVENTORY_LABEL"] + ":"}
            </label>
            {props.items.map((item) => (
                <span className="InventoryOption">
                    <label>{item.label}</label>
                </span>
            ))}
        </menu>
    )
}
