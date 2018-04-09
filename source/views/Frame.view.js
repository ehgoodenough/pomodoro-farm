import Preact from "preact"

import "views/Frame.view.less"

export default function Frame(props) {
    return (
        <div className="Frame">
            {props.children}
        </div>
    )
}
