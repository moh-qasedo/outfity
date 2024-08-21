import React, {memo, useCallback} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthenticationStackParamList} from '../../../routes';
import Screen from '../../../components/Screen';
import Header from './components/Header';
import Footer from './components/Footer';

export type Props = StackScreenProps<AuthenticationStackParamList, 'Welcome'>;

const Welcome = ({navigation}: Props) => {
  const handleNavigation = useCallback(
    (route: 'Login' | 'CreateAccount' | 'ForgotPassword') => {
      navigation.navigate(route);
    },
    [navigation],
  );

  return (
    <Screen>
      <Header />
      <Footer
        onLogin={() => handleNavigation('Login')}
        onCreateAccount={() => handleNavigation('CreateAccount')}
        onForgotPassword={() => handleNavigation('ForgotPassword')}
      />
    </Screen>
  );
};

export default memo(Welcome);
