import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { StartUp } from './StartUp.js';
import { styles } from './Styles.js';



export default function App() {
  return (
    <NavigationContainer styles={styles.site}>
        <StartUp/>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

