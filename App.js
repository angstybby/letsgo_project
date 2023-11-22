import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';

import React, { useState } from 'react';
import { StartUp } from './StartUp.js';
import { Main } from './Main.js';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <MenuProvider>
        <NavigationContainer>
            {!isLoggedIn ? (
                <StartUp login={login}/>
            ) : (
                <Main logout={logout}/>
            )}
            <StatusBar style="auto" />
        </NavigationContainer>
        </MenuProvider>
    );
}
