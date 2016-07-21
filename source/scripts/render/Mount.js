import React from "react"

import Countdown from "scripts/render/Countdown.js"

class Frame extends React.Component {
    render() {
        return (
            <div className="frame">
                {this.props.children}
            </div>
        )
    }
}

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
