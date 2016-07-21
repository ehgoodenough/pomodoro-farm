import React from "react"
import Moment from "moment"

export default class Countdown extends React.Component {
    render() {
        return (
            <div className="countdown">
                <meter value={Math.floor(this.props.countdown.time / 1000) || 0}
                    min={0} max={Math.floor(this.props.countdown.duration / 1000) || 0}/>
                <time>{Moment(Math.max(this.props.countdown.time || 0, 0)).format("mm:ss")}</time>
            </div>
        )
    }
}

// Accepts negative time.
// Assumes time and duration in milliseconds.
