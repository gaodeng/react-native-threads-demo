import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Thread } from 'react-native-threads';

// start a new react native JS process
const thread = new Thread('./thread.js');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='hello' onPress={()=>{
          // send a message, strings only
          thread.postMessage('hello from app.js');
          // listen for messages
          thread.onmessage = (message) => console.log(message);
      }}></Button>
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
});
