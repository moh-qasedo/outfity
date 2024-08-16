import React, {memo, useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from '../Text';
import {getSlideTitleTransformation} from '../../utils';
import {SlideModel} from '../../models';
import CONSTANTS from '../../constants';

type Props = SlideModel;

const Slide = ({title, right, image}: Props) => {
  const {top} = useSafeAreaInsets();
  const imageContainerStyle = useMemo(
    () => StyleSheet.flatten([styles.imageContainer, {top: top}]),
    [top],
  );
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
      <View style={imageContainerStyle}>
        <Image source={image} style={styles.image} />
      </View>
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
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
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
  imageContainer: {
    position: 'absolute',
    start: 0,
    end: 0,
    bottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
