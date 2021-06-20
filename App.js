import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBottomNavigation from './navigation/TabBottomNavigation';
// import { View, Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <TabBottomNavigation/>
    </NavigationContainer>
  );
}