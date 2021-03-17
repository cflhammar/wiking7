import React, { useState } from "react";

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: 0 };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <p>{this.state.time}</p>
    }
}

export default Stopwatch;