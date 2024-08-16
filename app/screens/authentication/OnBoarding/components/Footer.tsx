import React, {useMemo} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import DotsPaginator from '../../../../components/DotsPaginator';
import SubSlide from '../../../../components/SubSlide';
import {SlideModel} from '../../../../models';
import CONSTANTS from '../../../../constants';

type Props = {
  slides: SlideModel[];
  backgroundColor: Animated.AnimatedInterpolation<string>;
  activeSlideIndex: number;
  slideOffset: Animated.AnimatedInterpolation<number>;
  onPressNext: (offset: number) => void;
  onGetStarted: () => void;
};

const Footer = ({
  slides,
  backgroundColor,
  activeSlideIndex,
  slideOffset,
  onPressNext,
  onGetStarted,
}: Props) => {
  const footerUnderlayStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.footerUnderlay,
        {backgroundColor: backgroundColor},
      ]),
    [backgroundColor],
  );
  const footerOverlayStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.footerOverlay,
        {
          width: slides.length * CONSTANTS.DIMENSIONS.SCREEN_WIDTH,
          transform: [{translateX: slideOffset}],
        },
      ]),
    [slides, slideOffset],
  );

  return (
    <View>
      <View style={styles.footerPaginator}>
        <DotsPaginator
          activeIndex={activeSlideIndex}
          numberOfDots={slides.length}
        />
      </View>
      <Animated.View style={footerUnderlayStyle} />
      <Animated.View style={footerOverlayStyle}>
        {slides.map((slide, index) => (
          <SubSlide
            key={index}
            last={index == slides.length - 1}
            slide={slide}
            onPress={() =>
              index == slides.length - 1
                ? onGetStarted()
                : onPressNext((index + 1) * CONSTANTS.DIMENSIONS.SCREEN_WIDTH)
            }
          />
        ))}
      </Animated.View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerUnderlay: StyleSheet.absoluteFillObject,
  footerOverlay: {
    flexDirection: 'row',
    backgroundColor: CONSTANTS.COLORS.WHITE,
    borderTopLeftRadius: CONSTANTS.DIMENSIONS.SLIDE_BORDER_RADIUS,
    paddingTop: 40,
    paddingBottom: 10,
  },
  footerPaginator: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    top: 30,
  },
});
