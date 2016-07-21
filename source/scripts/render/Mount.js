import React from "react"

import Frame from "scripts/render/Frame.js"
import Countdown from "scripts/render/Countdown.js"

export default class Mount extends React.Component {
    render() {
        if(!!this.state) {
            return (
                <Frame>
                    <Countdown countdown={this.state.countdown}/>
                </Frame>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}
