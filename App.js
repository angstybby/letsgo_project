import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


import React from 'react';
import { Text, View } from 'react-native';
import { StartUp } from './StartUp.js';
import { styles } from './Styles.js';



export default function App() {
  return (
    <NavigationContainer>
        <StartUp/>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

