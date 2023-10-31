import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import CounterComponent from './CounterComponent';

export default function App() {

  const showToast = () => {
    //console.log("Toast clicked");
    ToastAndroid.show(
      "You clicked the toast!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    )
  }

  return (
    <View style={styles.container}>
      <CounterComponent />
      <Text style={styles.text}>This is my first mobile app</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={() => showToast()}>
        <Text style={{color: '#fff'}}>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "deepskyblue",
    fontSize: 24,
    padding: 20
    },

    button: {
      borderRadius: 10,
      backgroundColor: "#29b6f6",
      width: 150,
      height: 50,
      justifyContent: "center",
      alignItems: "center"
    }
});
