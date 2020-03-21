declare module 'react-native-gifted-touch' {
  import { FunctionComponent, GestureResponderEvent } from 'react';

  export class RNGiftedTouch extends FunctionComponent<IRNGiftedTouchProps> {}

  export interface IRNGiftedTouchProps {
    onSinglePress: (event: GestureResponderEvent) => void;
    onDoublePress: (event: GestureResponderEvent) => void;
    onLongPress: (event: GestureResponderEvent) => void;
    longPressDelay: number;
    doublePressDelay: number;
  }
}
