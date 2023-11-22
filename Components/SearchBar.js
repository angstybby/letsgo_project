import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar ({ placeHolder, length }) {
    const [inputBody, setInputBody] = useState('');

    return (
        <View style={[{width: length ? length : ''}, styles.searchBar]}>
            <TextInput style={styles.searchText}><Icon name='search' size={15}/> {placeHolder}</TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        opacity: 0.8,
        flexDirection: 'row',
        padding: 10,
    },
    searchText: {
        fontSize: 15,
    }
});