import React, {memo, useCallback, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthenticationStackParamList} from '../../../routes';
import Screen from '../../../components/Screen';
import Layout from '../../../components/Layout';
import Header from './components/Header';
import Body from './components/Body';
import SocialFooter from '../../../components/SocialFooter';
import {layouts} from '../../../data';
import {LoginCredentials} from '../../../models';

export type Props = StackScreenProps<AuthenticationStackParamList, 'Login'>;

const Login = ({navigation}: Props) => {
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [remember, setRemember] = useState(true);
  const handleNavigateToForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);
  const handleLoginWithCredintials = useCallback(() => {}, []);
  const handleLoginWithGoogle = useCallback(() => {}, []);
  const handleLoginWithFacebook = useCallback(() => {}, []);
  const handleLoginWithApple = useCallback(() => {}, []);
  const handleNavigateToCreateAccount = useCallback(() => {
    navigation.navigate('CreateAccount');
  }, [navigation]);
  return (
    <Screen>
      <Layout data={layouts.login} />
      <Header />
      <Body
        loginCredentials={loginCredentials}
        isRemembered={remember}
        onChangeLoginCredentials={setLoginCredentials}
        onLogin={handleLoginWithCredintials}
        onForgotPassword={handleNavigateToForgotPassword}
        onRememberMe={setRemember}
      />
      <SocialFooter
        label="Don’t have an account?"
        buttonLabel="Sign Up here"
        onPressLabelButton={handleNavigateToCreateAccount}
        onLoginWithGoogle={handleLoginWithGoogle}
        onLoginWithFacebook={handleLoginWithFacebook}
        onLoginWithApple={handleLoginWithApple}
      />
    </Screen>
  );
};

export default memo(Login);
