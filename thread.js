import { self } from 'react-native-threads';

// listen for messages
self.onmessage = (message) => {

    self.postMessage('hello from thread.js ' + new Date().toISOString());
}

// send a message, strings only
