import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeView} from '../views/Home/HomeView';
import {WebPageView} from '../views/WebPage/WebPageView';

export type RootStackParams = {
  HomeView: undefined;
  WebPageView: {uri: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WebPageView"
        component={WebPageView}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};
