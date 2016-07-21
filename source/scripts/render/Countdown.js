import React from "react"
import Moment from "moment"

export default class Countdown extends React.Component {
    render() {
        return (
            <div className="countdown">
                <meter value={Math.floor(this.props.countdown.time / 1000)}
                    min={0} max={Math.floor(this.props.countdown.duration / 1000)}/>
                <time>{Moment(Math.max(this.props.countdown.time, 0)).format("m:ss")}</time>
            </div>
        )
    }
}

// Assumes countdown is defined.
// Assumes time/duration are numeric.
// Accepts time/duration as negative, which are treated as zero.
// Assumes time/duration are milliseconds, which are rounded to seconds.
