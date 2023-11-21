
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { CalendarScreenComponent } from './Calendar/CalendarScreen.js'
import { styles } from './Styles.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
                component={CalendarTab}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar" size={30}></Icon>
                    ),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={DiscoverTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="compass" size={35}></Icon>
                    ),
                }}
            />
            <Tab.Screen 
                name="Account"
                component={AccountTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" size={30}></Icon>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function CalendarTab ({ navigation }) {
    return (<CalendarScreenComponent/>);
}

function AccountTab ({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <Text>Account</Text>
        </View>
    );
}

function DiscoverTab ({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <Text>Discover</Text>
        </View>
    );
}