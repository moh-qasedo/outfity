import React, {memo, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import Button from '../Button';
import {ButtonProps} from '../../props';
import CONSTANTS from '../../constants';

const IconButton = ({size = 60, ...restProps}: ButtonProps) => {
  const contentStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.content,
        {width: size, height: size, borderRadius: size / 2},
      ]),
    [size],
  );
  return (
    <Button
      {...restProps}
      style={styles.container}
      contentStyle={contentStyle}
    />
  );
};

export default memo(IconButton);

const styles = StyleSheet.create({
  container: {
    backgroundColor: CONSTANTS.COLORS.WHITE,
  },
  content: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});
