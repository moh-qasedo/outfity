import React, {memo, useMemo} from 'react';
import {Animated} from 'react-native';
import Slide from './Slide';
import {SlideModel} from '../../models';
import CONSTANTS from '../../constants';

type SliderProps = {
  slides: SlideModel[];
  animatedSlideValue: Animated.Value;
};

const Slider = ({slides, animatedSlideValue}: SliderProps) => {
  const onScroll = useMemo(
    () =>
      Animated.event(
        [{nativeEvent: {contentOffset: {x: animatedSlideValue}}}],
        {useNativeDriver: true},
      ),
    [animatedSlideValue],
  );
  return (
    <Animated.FlatList
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
