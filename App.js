import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import CounterComponent from './CounterComponent';
import BottomNavigation from './BottomNavigation';
// import Icon from 'react-native-ico-material-design';



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
      <Text style={styles.headerText}>This is my first mobile app</Text>
      <CounterComponent  />
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={() => showToast()}>
      <Text style={{color: '#fff'}}>Press me!</Text>
      </TouchableOpacity> 
      <View style={styles.container} > 
      <BottomNavigation />
      </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },

  text: {
    color: "deepskyblue",
    fontSize: 24,
    padding: 20
    },

    headerText: {
      color: "deepskyblue",
      fontSize: 46,
      // padding: 10,
      // width: '90%',
      textAlign: 'center',
      paddingTop: 10
    },

    button: {
      borderRadius: 10,
      backgroundColor: "#29b6f6",
      width: 150,
      height: 50,
      justifyContent: "center",
      alignItems: "center"
    },


});
