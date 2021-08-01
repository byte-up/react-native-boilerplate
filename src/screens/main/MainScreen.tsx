import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {MainBottomTabParamList} from './MainBottomTabParams';
import DetailScreen from './DetailScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Details" component={DetailScreen} />
    </BottomTab.Navigator>
  );
}

export default MainScreen;
