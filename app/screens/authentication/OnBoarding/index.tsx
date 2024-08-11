import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import Screen from '../../../components/Screen';
import Header from './components/Header';
import CONSTANTS from '../../../constants';
import {slides} from '../../../data';
import Footer from './components/Footer';

type Props = {};

const OnBoarding = (props: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<Animated.FlatList>(null);
  const animatedSlideValue = new Animated.Value(0);

  const {animatedColor, animatedOffset, onScrollAnimated} = useMemo(
    () => ({
      animatedColor: animatedSlideValue.interpolate({
        inputRange: slides.map(
          (_, index) => index * CONSTANTS.DIMENSIONS.SCREEN_WIDTH,
        ),
        outputRange: slides.map(slide => slide.color),
      }),
      animatedOffset: animatedSlideValue.interpolate({
        inputRange: slides.map(
          (_, index) => index * CONSTANTS.DIMENSIONS.SCREEN_WIDTH,
        ),
        outputRange: slides.map(
          (_, index) => -1 * index * CONSTANTS.DIMENSIONS.SCREEN_WIDTH,
        ),
      }),
      onScrollAnimated: Animated.event(
        [{nativeEvent: {contentOffset: {x: animatedSlideValue}}}],
        {
          useNativeDriver: false,
          listener: (e: NativeSyntheticEvent<NativeScrollEvent>) => {
            setActiveSlideIndex(
              parseInt(
                (
                  e.nativeEvent.contentOffset.x /
                  CONSTANTS.DIMENSIONS.SCREEN_WIDTH
                ).toString(),
              ),
            );
          },
        },
      ),
    }),
    [activeSlideIndex, animatedSlideValue],
  );

  const handleSlideToNextSlide = useCallback(
    (offset: number) =>
      sliderRef.current?.scrollToOffset({offset: offset, animated: true}),
    [sliderRef],
  );

  return (
    <Screen>
      <Header
        sliderRef={sliderRef}
        slides={slides}
        backgroundColor={animatedColor}
        onScroll={onScrollAnimated}
      />
      <Footer
        slides={slides}
        backgroundColor={animatedColor}
        activeSlideIndex={activeSlideIndex}
        slideOffset={animatedOffset}
        onPressNext={handleSlideToNextSlide}
      />
    </Screen>
  );
};

export default OnBoarding;
