import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Styles.js';

const Stack = createStackNavigator();

export function StartUp ({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: { backgroundColor: '#292929' },
            headerShown: false,
        }}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

function StartScreen ({ navigation }) {
    return (
        <View>
            <Text>Start</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
}

function Login ({ navigation }) {
    return (
        <View>
            <Text>Start</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function Register ({ navigation }) {
    return (
        <View>
            <Text>Start</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}


