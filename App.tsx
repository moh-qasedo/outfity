import React, {memo} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './app/components/Screen';
import AuthenticationStackNavigator from './app/navigators/AuthenticationStackNavigator';
import CONSTANTS from './app/constants';

const App = (): React.JSX.Element => {
  return (
    <Screen>
      <StatusBar
        translucent={true}
        backgroundColor={CONSTANTS.COLORS.TRANSPARENT}
      />
      <NavigationContainer>
        <AuthenticationStackNavigator />
      </NavigationContainer>
    </Screen>
  );
};

export default memo(App);
