import React, {memo} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthenticationStackParamList} from '../../../routes';
import Screen from '../../../components/Screen';
import Header from './components/Header';
import Footer from './components/Footer';

export type Props = StackScreenProps<AuthenticationStackParamList, 'Welcome'>;

const Welcome = ({navigation}: Props) => {
  return (
    <Screen>
      <Header />
      <Footer />
    </Screen>
  );
};

export default memo(Welcome);
