import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import DotsPaginator from '../DotsPaginator';
import Button from '../Button';
import Spacer from '../Spacer';
import Text from '../Text';
import {SlideModel} from '../../models';
import CONSTANTS from '../../constants';

type Props = {
  slide: SlideModel;
  index: number;
  numberOfSlides: number;
};

const SubSlide = ({slide, index, numberOfSlides}: Props) => {
  return (
    <View style={styles.slideContent}>
      <DotsPaginator activeIndex={index} numberOfDots={numberOfSlides} />
      <Spacer width={1} height={40} />
      <Text style={styles.subtitle}>{slide.subtitle}</Text>
      <Spacer width={1} height={12} />
      <Text style={styles.description}>{slide.description}</Text>
      <Spacer width={1} height={40} />
      <Button
        onPress={() => {}}
        label="Next"
        varient="default"
        style={styles.nextButton}
      />
    </View>
  );
};

export default memo(SubSlide);

const styles = StyleSheet.create({
  slideContent: {
    width: CONSTANTS.DIMENSIONS.SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 56,
  },
  subtitle: {
    fontSize: CONSTANTS.FONT_SIZES.X24,
    fontWeight: CONSTANTS.FONT_WEIGHTS.BOLD,
    lineHeight: 30,
    textAlign: 'center',
  },
  description: {
    color: CONSTANTS.COLORS.SLATE_GRAY,
    lineHeight: 24,
    textAlign: 'center',
  },
  nextButton: {
    width: '100%',
  },
});
