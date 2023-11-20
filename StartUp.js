import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';

import { styles } from './Styles.js';
import { CustomInputText } from './CustomInputText.js';
import { CustomButton } from './CustomButton.js';

const Stack = createStackNavigator();

export function StartUp ({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: { backgroundColor: '#292929' },
            headerBackTitle: 'back',
            headerTitle: '',
            headerTransparent: true, // Make the header background transparent
            headerTintColor: 'white',
        }}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

function StartScreen ({ navigation }) {
    return (
        <View style={styles.startContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            <CustomButton body={'Login'} onPress={() => navigation.navigate('Login')}/>
            <CustomButton body={'Register'} onPress={() => navigation.navigate('Register')}/>
            <Pressable>
                <Text style={styles.startupLinkText}>join as a guest</Text>
            </Pressable>
        </View>
    );
}

function Login ({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            
            <View><CustomInputText heading={'username or email'}/></View>
            <View><CustomInputText heading={'password'}/></View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'}/></View>
        </View>
    );
}

function Register ({ navigation }) {
    return (
        <View style={styles.loginContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            
            <View><CustomInputText heading={'username'}/></View>
            <View><CustomInputText heading={'email'}/></View>
            <View><CustomInputText heading={'new password'}/></View>
            <View><CustomInputText heading={'confirm password'}/></View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'}/></View>
        </View>
    );
}


