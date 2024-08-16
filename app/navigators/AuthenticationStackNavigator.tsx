import {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screens/authentication/OnBoarding';
import Welcome from '../screens/authentication/Welcome';
import {AuthenticationStackParamList} from '../routes';
import Login from '../screens/authentication/Login';
import CreateAccount from '../screens/authentication/CreateAccount';
import ForgotPassword from '../screens/authentication/ForgotPassword';

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen
        name="CreateAccount"
        component={CreateAccount}
      />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </AuthenticationStack.Navigator>
  );
};

export default memo(AuthenticationStackNavigator);
