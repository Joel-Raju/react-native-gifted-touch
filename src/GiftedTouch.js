import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  PanResponder,
} from 'react-native';
import PropTypes from 'prop-types';

const LONG_PRESS_DELAY = 700;
const DOUBLE_PRESS_DELAY = 400;

const GiftedTouch = ({
  onSinglePress,
  onDoublePress,
  onLongPress,
  children,
  longPressDelay,
  doublePressDelay 
}) => {

  const [isMove, setMove] = useState(false);
  const [isTerminated, setTerminated] = useState(false);

  const [touchStartTime, setTouchStartTime] = useState(0);
  const [lastTap, setLastTap] = useState(0);

  const [longPressTimer, setLongPressTimer] = useState(0);
  const [singlePressTimer, setSinglePressTimer] = useState(0);

  const _longPressDelay = longPressDelay ? longPressDelay : LONG_PRESS_DELAY;
  const _doublePressDelay = doublePressDelay ? doublePressDelay : DOUBLE_PRESS_DELAY;

  const touchElement = useRef(null);

  useEffect(() => () => {
    _cancelLongPressTimer();
    _cancelSinglePressTimer();
  }, [touchElement]);

  const _onSinglePress = (event, gestureState) => {
    if (onSinglePress && typeof onSinglePress === 'function') {
      onSinglePress(event, gestureState);
    }
  };

  const _onDoublePress = (event, gestureState) => {
    if (onDoublePress && typeof onDoublePress === 'function') {
      onDoublePress(event, gestureState);
    }
  };

  const _onLongPress = (event, gestureState) => {
    if (onLongPress && typeof onLongPress === 'function') {
      onLongPress(event, gestureState);
    }
  };

  const _cancelLongPressTimer = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(0);
    }
  };

  const _cancelSinglePressTimer = () => {
    if (singlePressTimer) {
      clearTimeout(singlePressTimer);
      setSinglePressTimer(0);
    }
  };

  const _handlePressOut = (event, gestureState) => {
    const elapsedTime = Date.now() - touchStartTime;
    if (elapsedTime > _longPressDelay) {
      _onLongPress(event, gestureState);
    } else {
      _handleTap(event, gestureState);
    }
    setTouchStartTime(0);
  };

  const _handleTap = (event, gestureState) => {
    _cancelSinglePressTimer();
    
    const timeNow = Date.now();

    if (lastTap && timeNow - lastTap < _doublePressDelay) {
      _onDoublePress(event, gestureState);
    } else {
      setLastTap(timeNow);

      const timeout =  setTimeout(() => {
        setLastTap(0);
        _onSinglePress(event, gestureState);
      }, _doublePressDelay);
      setSinglePressTimer(timeout);
    }
  };

  const responder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
  

    onPanResponderStart: (event, gestureState) => {
      setMove(false);
      _cancelLongPressTimer();
      
      const timeout =  setTimeout(() => {
        if (!isMove && !isTerminated) {
          setTouchStartTime(Date.now());
        }
      });

      setLongPressTimer(timeout);
    },

    onPanResponderRelease: (event, gestureState) => {
      _handlePressOut(event, gestureState);
    },

    onPanResponderTerminate: (event, gestureState) => {
      setTerminated(true);
    }
  });

  return (
      <View {...responder.panHandlers} ref={touchElement}>
        {children}
      </View>
  );
};

GiftedTouch.propTypes = {
  children: PropTypes.node,
  onSinglePress: PropTypes.func,
  onDoublePress: PropTypes.func,
  onLongPress: PropTypes.func,
  longPressDelay: PropTypes.number,
  doublePressDelay: PropTypes.number,
}


export default GiftedTouch;
