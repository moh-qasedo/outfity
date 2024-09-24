import React, {memo, useCallback, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthenticationStackParamList} from '../../../routes';
import Screen from '../../../components/Screen';
import Layout from '../../../components/Layout';
import {layouts} from '../../../data';
import Header from '../Login/components/Header';
import SocialFooter from '../../../components/SocialFooter';
import Body from './components/Body';
import {SignupCredentials} from '../../../models';

export type Props = StackScreenProps<
  AuthenticationStackParamList,
  'CreateAccount'
>;

const CreateAccount = ({navigation}: Props) => {
  const [signupCredentials, setSignupCredentials] = useState<SignupCredentials>(
    {
      email: '',
      password: '',
      confirmedPassword: '',
    },
  );
  const handleSignup = useCallback(() => {}, []);
  const handleLoginWithGoogle = useCallback(() => {}, []);
  const handleLoginWithFacebook = useCallback(() => {}, []);
  const handleLoginWithApple = useCallback(() => {}, []);
  const handleNavigateToLogin = useCallback(() => {
    navigation.navigate('CreateAccount');
  }, [navigation]);
  return (
    <Screen>
      <Layout data={layouts.forgotPassword} />
      <Header />
      <Body
        signupCredentials={signupCredentials}
        onChangeSignupCredentials={setSignupCredentials}
        onSignup={handleSignup}
      />
      <SocialFooter
        label="Already have an account?"
        buttonLabel="Login here"
        onPressLabelButton={handleNavigateToLogin}
        onLoginWithGoogle={handleLoginWithGoogle}
        onLoginWithFacebook={handleLoginWithFacebook}
        onLoginWithApple={handleLoginWithApple}
      />
    </Screen>
  );
};

export default memo(CreateAccount);
