import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStackNavigator from './app/navigators/AuthenticationStackNavigator';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
};

export default memo(App);
