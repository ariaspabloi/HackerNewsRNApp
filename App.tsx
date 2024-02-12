import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './app/presentation/navigation/stackNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
