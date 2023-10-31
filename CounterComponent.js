import React from 'react';
import { Text, Button } from 'react-native';

export default class CounterComponent extends React.Component {
    state = {
        value: 0,
        total_taps: 0
    }

    incrementValue = () => {
        this.setState({
            value: this.state.value + 1,
            total_taps: this.state.total_taps + 1
        })
        console.log("Value: " + (this.state.value + 1) + " Total taps: " + (this.state.total_taps))
    }

    decrementValue = () => {
        this.setState({
            value: this.state.value - 1,
            total_taps: this.state.total_taps + 1
        })
        console.log("Value: " + (this.state.value - 1) + " Total taps: " + (this.state.total_taps))
    }

render () {
    return (
        <>
        <Text>{this.state.value}</Text>
        <Text>{"Total taps: " + this.state.total_taps}</Text>
        <Button onPress={this.decrementValue} title="Decrease" />
        <Text>   </Text>
        <Button onPress={this.incrementValue} title="Increase" />
        </>
    );
}

}

