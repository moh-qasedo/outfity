import {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screens/authentication/OnBoarding';
import Welcome from '../screens/authentication/Welcome';
import {AuthenticationStackParamList} from '../routes';

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default memo(AuthenticationStackNavigator);
