import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';

import { styles } from './Styles.js';
import { CustomInputText } from './CustomInputText.js';
import { CustomButton } from './CustomButton.js';
// import { CalendarComponent } from './Calendar.js';
import { CalendarScreenComponent
 } from './CalendarScreen.js';
import { EventView, AddEvent } from './Event.js'

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
            {/* might need to change navigation for calendar vv */}
            <Stack.Screen name="Calendar" component={CalendarScreenComponent} options={{headerLeft: () => null}} />
            <Stack.Screen name="EventView" component={EventView}/>
            <Stack.Screen name="AddEvent" component={AddEvent} />
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
    const handleConfirm = () => {
        navigation.navigate('Calendar');
    };
    return (
        <View style={styles.loginContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            
            <View><CustomInputText heading={'username or email'}/></View>
            <View><CustomInputText heading={'password'}/></View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'} onPress={handleConfirm}/></View>
        </View>
    );
}

function Register ({ navigation }) {
    const handleConfirm = () => {
        navigation.navigate('Calendar');
    };
    return (
        <View style={styles.loginContainer}>
            <View><Image  source={require('./assets/icon.png')} style={{ width: 200, height: 200 }}/></View>
            
            <View><CustomInputText heading={'username'}/></View>
            <View><CustomInputText heading={'email'}/></View>
            <View><CustomInputText heading={'new password'}/></View>
            <View><CustomInputText heading={'confirm password'}/></View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'} onPress={handleConfirm}/></View>
        </View>
    );
}


