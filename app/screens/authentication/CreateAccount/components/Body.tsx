import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from '../../../../components/Container';
import Button from '../../../../components/Button';
import CONSTANTS from '../../../../constants';
import TextInput from '../../../../components/TextInput';
import {SignupCredentials} from '../../../../models';
import {IconProps} from '../../../../props';

type Props = {
  signupCredentials: SignupCredentials;
  onChangeSignupCredentials: (signupCredentials: SignupCredentials) => void;
  onSignup: () => void;
};

const defaultTextInputIconProps = {
  type: 'SimpleLineIcons',
  size: 20,
  color: CONSTANTS.COLORS.GREEN,
};

const Body = ({
  signupCredentials,
  onChangeSignupCredentials,
  onSignup,
}: Props) => {
  const handleChangeEmail = useCallback(
    (email: string) => {
      onChangeSignupCredentials({...signupCredentials, email: email});
    },
    [signupCredentials, onChangeSignupCredentials],
  );
  const handleChangePassword = useCallback(
    (password: string) => {
      onChangeSignupCredentials({...signupCredentials, password: password});
    },
    [signupCredentials, onChangeSignupCredentials],
  );
  const handleChangeConfirmedPassword = useCallback(
    (password: string) => {
      onChangeSignupCredentials({
        ...signupCredentials,
        confirmedPassword: password,
      });
    },
    [signupCredentials, onChangeSignupCredentials],
  );
  return (
    <Container
      title="Create account"
      subtitle="Let’s us know what your name, email, and your password"
      contentContainerStyle={styles.content}>
      <View style={styles.inputsContainer}>
        <TextInput
          value={signupCredentials.email}
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
          value={signupCredentials.password}
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
        <TextInput
          value={signupCredentials.confirmedPassword}
          onChangeText={handleChangeConfirmedPassword}
          placeholder="Confirm password"
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
      <Button
        varient="primary"
        onPress={onSignup}
        label="Create your account"
        style={styles.signupButton}
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
  signupButton: {
    marginHorizontal: 25,
    marginVertical: 40,
  },
});
