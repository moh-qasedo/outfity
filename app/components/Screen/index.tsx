import React, {memo, useMemo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import CONSTANTS from '../../constants';

const Screen = ({style, ...restProps}: ViewProps) => {
  const screenStyle = useMemo(
    () => StyleSheet.flatten([styles.container, style]),
    [style],
  );
  return <View {...restProps} style={screenStyle} />;
};

export default memo(Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.WHITE,
  },
});
