import React from 'react';
import { Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export function CustomButton ({ body, onPress }) {
    return (
        <Pressable style={styles.customButton} onPress={onPress ? (() => onPress()) : () => {}}>
            <Text style={styles.customButtonText}>{body}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    customButton: {
        padding: 15,
        width: 215,
        borderRadius: 50,
        backgroundColor: 'white',
    },
    customButtonText: {
        fontSize: 25,
        textAlign: 'center',
    },
});