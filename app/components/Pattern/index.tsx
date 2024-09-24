import React, {memo} from 'react';
import {ImageBackground, ViewStyle} from 'react-native';

type Props = {
  image: number;
  style?: ViewStyle;
};

const Pattern = ({image, style}: Props) => {
  return <ImageBackground style={style} source={image} resizeMode="repeat" />;
};

export default memo(Pattern);
