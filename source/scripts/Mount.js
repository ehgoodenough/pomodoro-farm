import React from "react"

export default class Mount extends React.Component {
    render() {
        if(!!this.state) {
            if(!!this.state.game) {
                if(this.state.game.pomodoro) {
                    return (
                        <div>
                            {this.state.game.pomodoro.toString()}
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
