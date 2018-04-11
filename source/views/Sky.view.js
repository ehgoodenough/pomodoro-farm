import Preact from "preact"

import "views/Sky.view.less"

export default class Sky extends Preact.Component {
    render() {
        return (
            <div className="Sky">
                {this.children}
            </div>
        )
    }
    get children() {
        // CALCULATE CLOCK-HOUR FROM CLOCK-COUNTDOWN
        let time = (1 - (this.props.clock.time / this.props.clock.maxtime)) * 24
        let HOUR = Math.min(time, 24)

        let children = []
        for(var hour = 0; hour <= 24; hour += 1) {
            children.push((
                <div className={`time-${hour}`} style={{
                    "opacity": Math.min(1, Math.max(0, 1 - (hour - HOUR)))
                }}/>
            ))
        }
        return children
    }
}
