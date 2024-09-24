import React, {memo} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthenticationStackParamList} from '../../../routes';
import Screen from '../../../components/Screen';
import Layout from '../../../components/Layout';
import {layouts} from '../../../data';
import Header from '../Login/components/Header';
import SocialFooter from '../../../components/SocialFooter';

export type Props = StackScreenProps<
  AuthenticationStackParamList,
  'ForgotPassword'
>;

const ForgotPassword = ({navigation}: Props) => {
  return (
    <Screen>
      <Layout data={layouts.forgotPassword} />
      <Header />
      {/* <SocialFooter  /> */}
    </Screen>
  );
};

export default memo(ForgotPassword);
