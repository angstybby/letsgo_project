
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Pressable } from 'react-native';
import eventStyles from './EventStyles.js'

export function DiscoverIcons() {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <>
        <View style={eventStyles.iconContainer}>
            <Pressable onPress={() => setIsFavourite(!isFavourite)}><Icon name={isFavourite ? 'heart' : 'heart-outline'} color={'white'} size={50}/></Pressable>
            <Pressable><Icon name='add' color={'white'} size={60}/></Pressable>
        </View>
        </>
    );
}