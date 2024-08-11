import React, {memo, RefObject} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import Slide from '../Slide';
import {SlideModel} from '../../models';
import CONSTANTS from '../../constants';

type Props = {
  sliderRef: RefObject<Animated.FlatList>;
  slides: SlideModel[];
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const Slider = ({sliderRef, slides, onScroll}: Props) => {
  return (
    <Animated.FlatList
      ref={sliderRef}
      data={slides}
      keyExtractor={item => item.title}
      renderItem={({item}) => <Slide {...item} />}
      horizontal
      snapToInterval={CONSTANTS.DIMENSIONS.SCREEN_WIDTH}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={1}
      bounces={false}
      onScroll={onScroll}
    />
  );
};

export default memo(Slider);
