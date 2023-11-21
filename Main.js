
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './Styles.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalendarScreenComponent } from './CalendarScreen.js';
import { MenuOption, MenuProvider } from 'react-native-popup-menu';
const Tab = createBottomTabNavigator();

export function Main({ logout }) {
    return (
        <Tab.Navigator
        tabBarOptions={{
            tabStyle: { marginTop: 3 },
            labelStyle: { marginBottom: -9 },
          }}
        >
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar" size={30}></Icon>
                    ),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="compass" size={35}></Icon>
                    ),
                }}
            />
            <Tab.Screen 
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" size={30}></Icon>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function Calendar ({ navigation }) {
    return (
        <MenuProvider>
        <CalendarScreenComponent/>
        {/* // <View style={styles.loginContainer}>
        //     <Text>Calendar</Text>
        //     <Icon name="calendar"></Icon>
        // </View> */}
        </MenuProvider>
    );
}

function Account ({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <Text>Account</Text>
        </View>
    );
}

function Discover ({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <Text>Discover</Text>
        </View>
    );
}