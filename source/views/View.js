import Preact from "preact"

import "index.css"

import Score from "views/Score.view.js"

export default function View(props) {
    return (
        <div id="frame">
            <Score score={props.game.score}/>
        </div>
    )
}
