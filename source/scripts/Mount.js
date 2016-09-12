import React from "react"

export default class Mount extends React.Component {
    render() {
        if(!!this.state) {
            if(!!this.state.game) {
                return (
                    <div>
                        <section>
                            <button onClick={this.startPomodoro.bind(this)}>
                                <span>Start Pomodoro</span>
                            </button>
                            {!!this.state.game.pomodoro ? (
                                <div id="timer" style={{backgroundColor: this.state.game.pomodoro.color}}>
                                    {this.state.game.pomodoro.string}
                                </div>
                            ) : null}
                        </section>
                        <section>
                            000<br/>
                            000<br/>
                            000<br/>
                        </section>
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
