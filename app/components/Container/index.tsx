import React, {memo, useMemo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import CONSTANTS from '../../constants';

const Container = ({style, ...restProps}: ViewProps) => {
  const ContainerStyle = useMemo(
    () => StyleSheet.flatten([styles.container, style]),
    [style],
  );
  return <View {...restProps} style={ContainerStyle} />;
};

export default memo(Container);

const styles = StyleSheet.create({
  container: {
    borderRadius: CONSTANTS.DIMENSIONS.BORDER_RADIUS,
    backgroundColor: CONSTANTS.COLORS.WHITE,
    paddingVertical: 40,
    paddingHorizontal: 65,
  },
});
