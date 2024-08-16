import React, {memo, useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CONSTANTS from '../../../../constants';

const Header = () => {
  const {top} = useSafeAreaInsets();
  const containerStyle = useMemo(
    () => StyleSheet.flatten([styles.headerContainer, {paddingTop: top}]),
    [],
  );
  return (
    <View style={containerStyle}>
      <Image
        source={require('../../../../assets/images/outfit-5.png')}
        style={styles.image}
      />
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.BEIGE,
    borderBottomRightRadius: CONSTANTS.DIMENSIONS.SLIDE_BORDER_RADIUS,
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
