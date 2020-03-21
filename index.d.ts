declare module 'react-native-gifted-touch' {
  import React from 'react';

  export interface IRNGiftedTouchProps {
    onSinglePress: (event) => void;
    onDoublePress: (event) => void;
    onLongPress: (event) => void;
    longPressDelay: number;
    doublePressDelay: number;
  }

  export default class RNGiftedTouch extends React.Component<
    IRNGiftedTouchProps
  > {}
}
