import React, {memo, useMemo} from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import CONSTANTS from '../../constants';

const Text = ({style, ...restProps}: TextProps) => {
  const textStyle = useMemo(
    () => StyleSheet.flatten([styles.text, style]),
    [style],
  );
  return <RNText {...restProps} style={textStyle} />;
};

export default memo(Text);

const styles = StyleSheet.create({
  text: {
    color: CONSTANTS.COLORS.BLACK,
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO,
  },
});
