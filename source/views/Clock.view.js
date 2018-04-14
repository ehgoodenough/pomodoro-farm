import Preact from "preact"

import "views/Clock.view.less"

export default class Clock extends Preact.Component {
    render() {
        return (
            <div className="Clock">
                {this.props.clock.timestring}
                <button onClick={this.onClick} style={this.style}>
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
    get style() {
        return {
            "display": this.props.clock.hasStarted && !this.props.clock.hasEnded ? "none" : "block"
        }
    }
}
