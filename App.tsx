import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StackNavigator} from './app/presentation/navigation/stackNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <StackNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
