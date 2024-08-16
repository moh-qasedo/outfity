import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import CONSTANTS from '../../../../constants';

type Props = {};

const Header = (props: Props) => {
  return <View style={styles.headerContainer}></View>;
};

export default memo(Header);

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.BEIGE,
    borderBottomRightRadius: CONSTANTS.DIMENSIONS.SLIDE_BORDER_RADIUS,
  },
});
