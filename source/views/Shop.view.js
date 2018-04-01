import Preact from "preact"

import "views/Shop.view.less"

export default function Shop(props) {
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
