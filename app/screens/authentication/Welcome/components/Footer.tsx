import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../../components/Button';
import Spacer from '../../../../components/Spacer';
import Text from '../../../../components/Text';
import CONSTANTS from '../../../../constants';

type Props = {
  onLogin: () => void;
  onCreateAccount: () => void;
  onForgotPassword: () => void;
};

const Footer = ({onLogin, onCreateAccount, onForgotPassword}: Props) => {
  return (
    <View>
      <View style={styles.footerUnderlay} />
      <View style={styles.footerOverlay}>
        <Text style={styles.subtitle}>{'Let’s get started'}</Text>
        <Spacer width={1} height={12} />
        <Text style={styles.description}>
          {'Login to your account below or signup for an amazing experience'}
        </Text>
        <Spacer width={1} height={40} />
        <Button
          onPress={onLogin}
          label={'Have an account? Login'}
          varient="primary"
          style={styles.button}
        />
        <Spacer width={1} height={16} />
        <Button
          onPress={onCreateAccount}
          label={'Join us, it’s Free'}
          varient="default"
          style={styles.button}
        />
        <Spacer width={1} height={16} />
        <Button
          onPress={onForgotPassword}
          label={'Forgot password?'}
          varient="text"
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default memo(Footer);

const styles = StyleSheet.create({
  footerUnderlay: {
    backgroundColor: CONSTANTS.COLORS.BEIGE,
    ...StyleSheet.absoluteFillObject,
  },
  footerOverlay: {
    backgroundColor: CONSTANTS.COLORS.WHITE,
    borderTopLeftRadius: CONSTANTS.DIMENSIONS.BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 65,
    paddingTop: 65,
    paddingBottom: 50,
  },
  button: {
    width: '100%',
  },
  subtitle: {
    fontFamily: CONSTANTS.FONT_FAMILIES.LATO_BOLD,
    fontSize: CONSTANTS.FONT_SIZES.X24,
    lineHeight: 30,
    textAlign: 'center',
  },
  description: {
    color: CONSTANTS.COLORS.SLATE_GRAY,
    lineHeight: 24,
    textAlign: 'center',
  },
});
