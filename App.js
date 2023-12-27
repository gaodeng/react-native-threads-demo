import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

import { Thread } from 'react-native-threads';
import { useState } from 'react';

// start a new react native JS process
const thread = new Thread('./thread.js');

export default function App() {
  const [msg, setMsg] = useState('');
  const width = 256;
  const height = 256;
  const r = width * 0.33;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{msg}</Text>
      <Button title='hello' onPress={()=>{
          thread.postMessage('hello from app.js');
          thread.onmessage = (message) => {console.log(message)
            setMsg(message);
          };
      }}></Button>
      <StatusBar style="auto" />
      <View style={{borderWidth: 2, borderColor: 'red'}}>
      <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
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
  },
});
