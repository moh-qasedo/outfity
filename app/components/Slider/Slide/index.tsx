import React, {memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../Text';
import {getSlideTitleTransformation} from '../../../utils';
import {SlideModel} from '../../../models';
import CONSTANTS from '../../../constants';

export type SlideProps = SlideModel;

const Slide = ({title, right}: SlideProps) => {
  const titleContainerStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.titleContainer,
        getSlideTitleTransformation(right),
      ]),
    [right],
  );
  return (
    <View style={styles.slide}>
      <View style={titleContainerStyle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default memo(Slide);

const styles = StyleSheet.create({
  slide: {
    width: CONSTANTS.DIMENSIONS.SCREEN_WIDTH,
    justifyContent: 'center',
  },
  title: {
    fontWeight: CONSTANTS.FONT_WEIGHTS.BOLD,
    fontSize: CONSTANTS.FONT_SIZES.X80,
    lineHeight: CONSTANTS.FONT_SIZES.X80,
    color: CONSTANTS.COLORS.WHITE,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: CONSTANTS.DIMENSIONS.SLIDE_TITLE_CONTAINER_HEIGHT,
  },
});
