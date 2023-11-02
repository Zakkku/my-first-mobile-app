import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

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

    resetValues = () => {
        this.setState({
            value: 0,
            total_taps: 0
        });
    }

render () {
    return (
        <>
        <Text style={styles.text}>{this.state.value}</Text>
        <Text style={styles.text}>{"Total taps: " + this.state.total_taps}</Text>
        <View style={styles.buttonsContainer}>
        <Button  onPress={this.decrementValue} title="Decrease" />
        <Text>  </Text>
        <Button onPress={this.incrementValue} title="Increase" />
        <Text>   </Text>
        <Button onPress={this.resetValues} title="Reset"/>
        </View>
        </>
    );
}

}


const styles = StyleSheet.create({
  
    text: {
      color: "deepskyblue",
      fontSize: 18,
      padding: 5
      },

      buttonsContainer: {
        marginBottom: 16
      }

     
      
  });
