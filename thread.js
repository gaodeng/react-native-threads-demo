import { self } from 'react-native-threads';

// listen for messages
self.onmessage = (message) => {

    self.postMessage('hello from thread.js');
}

// send a message, strings only
