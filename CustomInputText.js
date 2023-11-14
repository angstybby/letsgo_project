import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';

export function CustomInputText ({ heading, boxWidth }) {
    const [inputBody, setInputBody] = useState('');

    return (
        <View>
            <Text style={styles.inputHeadingText}>{heading}</Text>
            <TextInput style={{width: boxWidth ? boxWidth : 300, ...styles.inputBox}}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    inputHeadingText: {
        paddingBottom: 5,
        paddingLeft: 2,
        color: 'white',
    },
    inputBox: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        fontSize: 20,
    },
});