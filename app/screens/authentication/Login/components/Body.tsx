import {StyleSheet, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import Container from '../../../../components/Container';
import Button from '../../../../components/Button';
import Spacer from '../../../../components/Spacer';
import CONSTANTS from '../../../../constants';
import TextInput from '../../../../components/TextInput';
import {LoginCredentials} from '../../../../models';
import {IconProps} from '../../../../props';
import CheckBox from '../../../../components/CheckBox';

type Props = {
  loginCredentials: LoginCredentials;
  isRemembered: boolean;
  onChangeLoginCredentials: (loginCredentials: LoginCredentials) => void;
  onLogin: () => void;
  onForgotPassword: () => void;
  onRememberMe: (remeber: boolean) => void;
};

const defaultTextInputIconProps = {
  type: 'SimpleLineIcons',
  size: 20,
  color: CONSTANTS.COLORS.GREEN,
};

const Body = ({
  loginCredentials,
  isRemembered,
  onChangeLoginCredentials,
  onLogin,
  onForgotPassword,
  onRememberMe,
}: Props) => {
  const handleChangeEmail = useCallback(
    (email: string) => {
      onChangeLoginCredentials({...loginCredentials, email: email});
    },
    [loginCredentials, onChangeLoginCredentials],
  );
  const handleChangePassword = useCallback(
    (password: string) => {
      onChangeLoginCredentials({...loginCredentials, password: password});
    },
    [loginCredentials, onChangeLoginCredentials],
  );
  return (
    <Container
      title="Welcome Back"
      subtitle="Use your credentials below and login to your account"
      contentContainerStyle={styles.content}>
      <View style={styles.inputsContainer}>
        <TextInput
          value={loginCredentials.email}
          onChangeText={handleChangeEmail}
          placeholder="Enter your email"
          placeholderTextColor={CONSTANTS.COLORS.SLATE_GRAY}
          keyboardType="email-address"
          textContentType="emailAddress"
          selectionColor={CONSTANTS.COLORS.GREEN}
          inputMode="email"
          autoComplete="email"
          leadingIconProps={
            {
              ...defaultTextInputIconProps,
              name: 'envelope',
            } as IconProps
          }
        />
        <TextInput
          value={loginCredentials.password}
          onChangeText={handleChangePassword}
          placeholder="Enter your password"
          placeholderTextColor={CONSTANTS.COLORS.SLATE_GRAY}
          textContentType="password"
          selectionColor={CONSTANTS.COLORS.GREEN}
          secureTextEntry
          leadingIconProps={
            {
              ...defaultTextInputIconProps,
              name: 'lock',
            } as IconProps
          }
        />
      </View>
      <Spacer height={24} width={1} />
      <View style={styles.row}>
        <CheckBox checked={true} onChange={onRememberMe} label="Remember me" />
        <Button
          varient="text"
          label="Forgot password"
          contentStyle={styles.forgotPasswordButton}
          pressedColor={CONSTANTS.COLORS.TRANSPARENT}
          onPress={onForgotPassword}
          labelStyle={styles.forgotPasswordButtonLabel}
        />
      </View>
      <Button
        varient="primary"
        onPress={onLogin}
        label="Log into your account"
        style={styles.loginButton}
      />
    </Container>
  );
};

export default memo(Body);

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 40,
  },
  inputsContainer: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPasswordButton: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: 'auto',
  },
  forgotPasswordButtonLabel: {
    color: CONSTANTS.COLORS.GREEN,
  },
  loginButton: {
    marginHorizontal: 25,
    marginVertical: 40,
  },
});
