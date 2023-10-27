import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';

export default function App() {

  const showToast = () => {
    console.log("Toast clicked");
    ToastAndroid.show(
      "You clicked this toast!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my first mobile app</Text>
      <StatusBar style="auto" />
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
    color: "#304ffe",
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
