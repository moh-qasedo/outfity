import React, {memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../Button';
import Spacer from '../Spacer';
import Text from '../Text';
import {SlideModel} from '../../models';
import CONSTANTS from '../../constants';

type Props = {
  slide: SlideModel;
  last: boolean;
  onPress: () => void;
};

const SubSlide = ({slide, last, onPress}: Props) => {
  const buttonConfig = useMemo(
    () =>
      last
        ? {varient: CONSTANTS.VARIENT.PRIMARY, label: 'Let’s get started'}
        : {varient: CONSTANTS.VARIENT.DEFAULT, label: 'Next'},
    [last],
  );
  return (
    <View style={styles.slideContent}>
      <Text style={styles.subtitle}>{slide.subtitle}</Text>
      <Spacer width={1} height={12} />
      <Text style={styles.description}>{slide.description}</Text>
      <Spacer width={1} height={40} />
      <Button
        onPress={onPress}
        label={buttonConfig.label}
        varient={buttonConfig.varient}
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
    paddingHorizontal: 65,
    paddingVertical: 40,
  },
  subtitle: {
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
    fontSize: CONSTANTS.FONT_SIZES.X24,
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
