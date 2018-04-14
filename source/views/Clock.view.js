import Preact from "preact"

import "views/Clock.view.less"

export default class Clock extends Preact.Component {
    render() {
        return (
            <div className="Clock">
                {this.props.clock.timestring}
                <button onClick={this.onClick}>
                    Start Day
                </button>
            </div>
        )
    }
    get onClick() {
        return () => {
            this.props.clock.reset()
        }
    }
}
