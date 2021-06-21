import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';
import { useFonts } from 'expo-font';
// import { View, Text } from 'react-native';

export default function App() {

  const [loaded] = useFonts({
    Helve: require('./assets/fonts/Helve.ttf'),
  })
  
  if(!loaded){
    return null;
  }
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}