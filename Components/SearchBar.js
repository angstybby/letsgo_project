import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar ({ placeHolder, length }) {
    const [inputBody, setInputBody] = useState('');

    return (
        <View style={styles.searchBar}>
            <Icon name='search' size={15}/>
            <TextInput style={styles.searchText} placeholder={placeHolder} placeholderTextColor={'grey'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        opacity: 0.7,
        flexDirection: 'row',
        padding: 10,
    },
    searchText: {
        paddingLeft: 5,
        fontSize: 15,
        flex: 1,
    }
});