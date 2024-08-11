import React, {memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import CONSTANTS from '../../constants';

type Props = {
  activeIndex: number;
  activeColor?: string;
  activeSize?: number;
  inactiveColor?: string;
  inactiveSize?: number;
  numberOfDots: number;
};

const DotsPaginator = ({
  activeColor = CONSTANTS.COLORS.GREEN,
  activeSize = 6,
  activeIndex,
  inactiveColor = CONSTANTS.COLORS.GREEN30,
  inactiveSize = 4,
  numberOfDots,
}: Props) => {
  const inactiveDotStyle = useMemo(
    () =>
      StyleSheet.flatten([
        {
          borderRadius: inactiveSize,
          width: inactiveSize,
          height: inactiveSize,
          backgroundColor: inactiveColor,
        },
      ]),
    [inactiveColor, inactiveSize],
  );
  const activeDotStyle = useMemo(
    () =>
      StyleSheet.flatten([
        {
          borderRadius: activeSize,
          width: activeSize,
          height: activeSize,
          backgroundColor: activeColor,
        },
      ]),
    [activeColor, activeSize],
  );
  return (
    <View style={styles.container}>
      {Array(numberOfDots)
        .fill(0)
        .map((_, index) => {
          return (
            <View
              key={index}
              style={index == activeIndex ? activeDotStyle : inactiveDotStyle}
            />
          );
        })}
    </View>
  );
};

export default memo(DotsPaginator);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
