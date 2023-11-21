import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';

import React from 'react';
import { StartUp } from './StartUp.js';
import { styles } from './Styles.js';



export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer styles={styles.site}>
          <StartUp/>
          <StatusBar style="auto" />
      </NavigationContainer>
    </MenuProvider>
  );
}

