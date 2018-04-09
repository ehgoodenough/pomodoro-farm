import Preact from "preact"

import "views/Clock.view.less"

export default class Clock extends Preact.Component {
    render() {
        return (
            <div className="Clock">
                {this.props.clock.timestring}
            </div>
        )
    }
}
