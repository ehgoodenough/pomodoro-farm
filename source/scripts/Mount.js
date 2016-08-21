import React from "react"

export default class Mount extends React.Component {
    render() {
        if(!!this.state) {
            if(this.state.game.pomodoro) {
                return (
                    <div>
                        Hello World!!
                    </div>
                )
            } else {
                return (
                    <div>
                        <button onClick={this.startPomodoro.bind(this)}>
                            <span>Start Pomodoro</span>
                        </button>
                    </div>
                )
            }
        } else {
            return (
                <div/>
            )
        }
    }
    startPomodoro() {
        this.state.game.startPomodoro()
    }
}
