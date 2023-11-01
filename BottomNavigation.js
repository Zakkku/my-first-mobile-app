import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// var iconHeight = 26;
// var iconWidth = 26;

export default class BottomNavigation extends React.Component {
    state = {
        screenText: 'Press a menu icon below'
    }

    changeText = (text) => {
        console.log(text + 'has been pressed')
        this.setState({
            screenText: text
        })
    }

    render() {
        return (
            <View style={styles.Container}>
                <View>
                    <Text style={{fontSize:30}}>{this.state.screenText}</Text>
                </View>
                <View style={styles.NavContainer}>
                    <View style={styles.NavBar}>
                        <Pressable onPress={() => this.changeText('Favorites')} style={styles.IconBehave}>

                        </Pressable>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0
    },
    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40
    },
    IconBehave: {
        padding: 14
    }
})