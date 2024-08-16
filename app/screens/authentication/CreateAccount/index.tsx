import React, {memo} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthenticationStackParamList} from '../../../routes';
import Screen from '../../../components/Screen';

export type Props = StackScreenProps<
  AuthenticationStackParamList,
  'CreateAccount'
>;

const CreateAccount = ({navigation}: Props) => {
  return <Screen></Screen>;
};

export default memo(CreateAccount);
