import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from './Styles.js';
import { CustomInputText } from './Components/CustomInputText.js';
import { CustomButton } from './Components/CustomButton.js';

const Stack = createStackNavigator();

export function StartUp({ login }) {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: { backgroundColor: '#292929' },
            headerBackTitle: 'back',
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: 'white',
        }}>
            <Stack.Screen name="Start" component={StartScreen} initialParams={{ login: login }}/>
            <Stack.Screen name="Login" component={Login} initialParams={{ login: login }}/>
            <Stack.Screen name="Register" component={Register} initialParams={{ login: login }}/>
        </Stack.Navigator>
    );
}

function StartScreen ({ route, navigation }) {
    const { login } = route.params;
    return (
        <View style={styles.startContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            <CustomButton body={'Login'} onPress={() => navigation.navigate('Login')}/>
            <CustomButton body={'Register'} onPress={() => navigation.navigate('Register')}/>
            <Pressable onPress={() => login()}>
                <Text style={styles.startupLinkText}>join as a guest</Text>
            </Pressable>
        </View>
    );
}

function Login ({ route, navigation }) {
    const { login } = route.params;
    return (
        <View style={styles.loginContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            
            <View><CustomInputText heading={'username or email'}/></View>
            <View><CustomInputText heading={'password'}/></View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'} onPress={() => login()}/></View>
        </View>
    );
}

function Register({ route, navigation }) {
    const { login } = route.params;
    return (
        <View style={styles.loginContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            
            <View><CustomInputText heading={'username'}/></View>
            <View><CustomInputText heading={'email'}/></View>
            <View><CustomInputText heading={'new password'}/></View>
            <View><CustomInputText heading={'confirm password'}/></View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'} onPress={() => login()}/></View>
        </View>
    );
}
