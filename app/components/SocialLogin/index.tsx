import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import CONSTANTS from '../../constants';
import IconButton from '../IconButton';
import {IconType} from '../../types';

type Props = {
  onLoginWithGoogle: () => void;
  onLoginWithFacebook: () => void;
  onLoginWithApple: () => void;
};

const defaultIconProps = {
  size: 20,
  color: CONSTANTS.COLORS.SLATE_GRAY,
  type: 'FontAwesome' as IconType,
};

const SocialLogin = ({
  onLoginWithGoogle,
  onLoginWithFacebook,
  onLoginWithApple,
}: Props) => {
  return (
    <View style={styles.container}>
      <IconButton
        onPress={onLoginWithGoogle}
        icon={{
          ...defaultIconProps,
          name: 'google',
        }}
      />
      <IconButton
        onPress={onLoginWithFacebook}
        icon={{
          ...defaultIconProps,
          name: 'facebook',
        }}
      />
      <IconButton
        onPress={onLoginWithApple}
        icon={{
          ...defaultIconProps,
          name: 'apple',
        }}
      />
    </View>
  );
};

export default memo(SocialLogin);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
});
