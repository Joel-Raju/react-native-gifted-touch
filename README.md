# react-native-gifted-touch #

`GiftedTouch` is a react native component that allows to handle single, double and long presses on a
single element effortlessly.

## Installation ##

`npm install react-native-gifted-touch`

or if you use yarn

`yarn add react-native-gifted-touch`

## Props ##

| Attributes            |     Type      |  Default  |  Required  |  Description                                                                         |
| :-------------------- | :-----------: | :-------: | :---------:| :----------------------------------------------------------------------------------: |
| onSinglePress         | `Function`    | `null`    | false      | Single press handler on the element                                                  |
| onDoublePress         | `Function`    | `null`    | false      | Double press handler on the element                                                  |
| onLongPress           | `Function`    | `null`    | false      | Long press handler on the element                                                    |
| longPressDelay        | `Number`      | 700       | false      | Delay in `ms` before triggering long press                                           |
| doublePressDelay      | `Number`      | 400       | false      | Delay in `ms` before triggering double press, should always be less than `longPressDelay` |

### onSinglePress(event, gestureState) ###

The single press handler on the component.

### onDoublePress(event, gestureState) ###

The double press handler on the component.

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

## Quirks & Limitations ##

- For this component to work as intended `longPressDelay` should always be greater than
`doublePressDelay`.
- You might notice a slight delay in `ms` before `onSinglePress` is invoked. The delay is exactly
equal to the value of `doublePressDelay`. This is because the single press event is queued using a
timeout and is delayed till `doublePressDelay` duration is elapsed, so as to trigger the double
press event if it receives one.
