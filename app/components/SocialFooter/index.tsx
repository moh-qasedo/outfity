import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import SocialLogin from '../SocialLogin';
import Text from '../Text';
import Button from '../Button';
import CONSTANTS from '../../constants';

type Props = {
  label: string;
  buttonLabel: string;
  onPressLabelButton: () => void;
  onLoginWithGoogle: () => void;
  onLoginWithFacebook: () => void;
  onLoginWithApple: () => void;
};

const Footer = ({
  label,
  buttonLabel,
  onPressLabelButton,
  onLoginWithGoogle,
  onLoginWithFacebook,
  onLoginWithApple,
}: Props) => {
  return (
    <View style={styles.container}>
      <SocialLogin
        onLoginWithGoogle={onLoginWithGoogle}
        onLoginWithFacebook={onLoginWithFacebook}
        onLoginWithApple={onLoginWithApple}
      />
      <View style={styles.textContainer}>
        <Text style={styles.signUpText}>{label} </Text>
        <Button
          onPress={onPressLabelButton}
          label={buttonLabel}
          contentStyle={styles.signUpButton}
          labelStyle={styles.signUpButtonLabel}
          pressedColor={CONSTANTS.COLORS.TRANSPARENT}
          varient="text"
        />
      </View>
    </View>
  );
};

export default memo(Footer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 36,
    paddingHorizontal: 20,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
    color: CONSTANTS.COLORS.WHITE,
  },
  signUpButton: {
    width: 'auto',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  signUpButtonLabel: {
    color: CONSTANTS.COLORS.GREEN,
  },
});
