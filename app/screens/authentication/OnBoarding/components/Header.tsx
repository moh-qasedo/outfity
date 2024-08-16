import React, {memo, RefObject} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import Slider from '../../../../components/Slider';
import {SlideModel} from '../../../../models';
import CONSTANTS from '../../../../constants';

type Props = {
  sliderRef: RefObject<Animated.FlatList>;
  slides: SlideModel[];
  backgroundColor: Animated.AnimatedInterpolation<string | number>;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const Header = ({sliderRef, slides, backgroundColor, onScroll}: Props) => {
  return (
    <Animated.View style={{...styles.slider, backgroundColor}}>
      <Slider sliderRef={sliderRef} slides={slides} onScroll={onScroll} />
    </Animated.View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    borderBottomRightRadius: CONSTANTS.DIMENSIONS.BORDER_RADIUS,
  },
});
