import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

const Header = () => {
  return <View style={styles.container} />;
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
