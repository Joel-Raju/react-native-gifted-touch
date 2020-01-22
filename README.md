# react-native-gifted-touch #

`GiftedTouch` is a react native component that allows to handle single, double and long presses on a
single element effortlessly.

## Installation ##

`yarn add react-native-gifted-touch`

## Props ##

| Attributes            |     Type      |  Default  |  Required  |  Description                                             |
| :-------------------- | :-----------: | :-------: | :---------:| :------------------------------------------------------: |
| onSinglePress         | `Function`    | `null`    | false      | Single press handler on the element                      |
| onDoublePress         | `Function`    | `null`    | false      | Double press handler on the element                      |
| onLongPress           | `Function`    | `null`    | false      | Long press handler on the element                        |
| longPressDelay        | `Number`      | 400       | false      | Delay in `ms` before triggering long press               |
| doublePressDelay      | `Number`      | 700       | false      | Delay in `ms` before triggering double press             |

### onSinglePress(event, gestureState) ###

The single press handler on the component.

### onDoublePress(event, gestureState) ###

The single press handler on the component.

### onLongPress(event, gestureState) ###

The long press handler on the component.

## Example ##

```jsx
import React from 'react';
import {View, Text} from 'react-native';
import GiftedTouch from 'react-native-gifted-touch';

function Component() {
  return (
    <GiftedTouch
      onSinglePress={(event, gestureState) => console.log('handle single press')}
      onDoublePress={(event, gestureState) => console.log('handle double press')}
      onLongPress={(event, gestureState) => console.log('handle long press')}
      longPressDelay={800}
      doublePressDelay={500}
    >
      <Text>I'm a touchable...</Text>
    </GiftedTouch>
  );
}
```
