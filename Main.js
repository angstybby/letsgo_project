
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Discover from './Discover/Discover.js';
import { CalendarScreenComponent } from './Calendar/CalendarScreen.js'
import { styles } from './Styles.js';
import { AllEvents, EventView, AddEvent } from './Event';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
export function Main({ logout }) {
    return (
        <NavigationContainer
            independent={true}
        >
          <Stack.Navigator screenOptions={{
            cardStyle: { backgroundColor: '#292929' },
            headerBackTitle: 'back',
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: 'white',
        }}>
            <Stack.Screen
              name="Tab"
              component={mainTab}
              initialParams={{ logout: logout }}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="EventView" component={EventView} />
            <Stack.Screen name="AddEvent" component={AddEvent} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

const Tab = createBottomTabNavigator();
export function mainTab({ logout }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarItemStyle: { marginTop: 3 },
                tabBarLabelStyle: { marginBottom: -9 },
            }}
            sceneContainerStyle={{ backgroundColor: '#292929' }}
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
                    headerShown: false,
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
    return (<CalendarScreenComponent />);
}

function DiscoverTab ({ navigation }) { return (<Discover/>); }

function AccountTab ({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <Text>Account</Text>
        </View>
    );
}