import React from "react"

class Frame extends React.Component {
    render() {
        return (
            <div className="frame">
                {this.props.children}
            </div>
        )
    }
}

class Countdown extends React.Component {
    render() {
        return (
            <div className="countdown">
                <meter min="0" max="10" value="5"/>
                <time>5:00</time>
            </div>
        )
    }
}

export default class Mount extends React.Component {
    render() {
        return (
            <Frame>
                <Countdown/>
            </Frame>
        )
    }
}
