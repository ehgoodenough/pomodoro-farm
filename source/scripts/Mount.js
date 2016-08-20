import React from "react"

export default class Mount extends React.Component {
    render() {
        if(!!this.state) {
            return (
                <div>
                    Hello World!!
                </div>
            )
        } else {
            return (
                <div/>
            )
        }
    }
}
