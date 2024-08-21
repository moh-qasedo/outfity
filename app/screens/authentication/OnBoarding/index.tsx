import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthenticationStackParamList} from '../../../routes';
import Screen from '../../../components/Screen';
import Header from './components/Header';
import Footer from './components/Footer';
import {slides} from '../../../data';
import CONSTANTS from '../../../constants';

export type Props = StackScreenProps<
  AuthenticationStackParamList,
  'OnBoarding'
>;

const OnBoarding = ({navigation}: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderRef = useRef<Animated.FlatList>(null);
  const animatedSlideValue = new Animated.Value(0);

  const {animatedColor, animatedOffset, onScrollAnimated} = useMemo(
    () => ({
      animatedColor: animatedSlideValue.interpolate({
        inputRange: slides.map(
          (_, index) => index * CONSTANTS.DIMENSIONS.SCREEN_WIDTH,
        ),
        outputRange: slides.map(slide => slide.color) as string[],
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
            const divisionResult =
              e.nativeEvent.contentOffset.x / CONSTANTS.DIMENSIONS.SCREEN_WIDTH;
            const tokens = divisionResult.toString().split('.');
            const points = tokens.length > 1 ? tokens[1][0] : '0';
            const offset =
              parseInt(points) >= 5
                ? parseInt(divisionResult.toString()) + 1
                : parseInt(divisionResult.toString());
            setActiveSlideIndex(offset);
          },
        },
      ),
    }),
    [activeSlideIndex, animatedSlideValue],
  );

  const handleSlideToNextSlide = useCallback(
    (offset: number) => {
      sliderRef.current?.scrollToOffset({offset: offset, animated: true});
    },
    [sliderRef],
  );

  const handleNavigateToWelcomeScreen = useCallback(() => {
    navigation.navigate('Welcome');
  }, [navigation]);

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
        onGetStarted={handleNavigateToWelcomeScreen}
      />
    </Screen>
  );
};

export default memo(OnBoarding);
