import React from 'react';
import { Text } from 'react-native';
import GiftedTouch from './GiftedTouch';

const MyComponent = () => {
  return (
    <GiftedTouch 
      onSinglePress={() => console.log('single pressed...')}
      onDoublePress={() => console.log('double pressed...')}
      onLongPress={() => console.log('long pressed...')}
      longPressDelay={800}
      doublePressDelay={500}>
        <Text>Hello world</Text>
    </GiftedTouch>
  );
};


export default MyComponent;
