    
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { styles } from '../Styles.js';
import eventStyles from './EventStyles.js';
import { DiscoverIcons } from './DiscoverIcons';

function formatDate(date) {
    var temp = date.split(' ');
    return(' ' + temp[1] + ' ' + temp[2] + ' ' + temp[3]);
}
    
export default function EventPage({ data, isOwn }) {
    return (
        <View style={eventStyles.event}>
            <View style={eventStyles.eventImageBorder}><ImageBackground source={require('../assets/event-test.jpeg')} style={eventStyles.eventImage}>
                
            </ImageBackground></View>
            <View style={eventStyles.eventContentContainer}>
                <Text style={eventStyles.eventHeadingText}>{data.title}</Text>
                <View style={eventStyles.eventDetailsContainer}>
                    <View style={eventStyles.eventDetailsItem}>
                        <View><Icon name='time' size={30} color={'white'}/></View>
                        <View style={eventStyles.vert}></View>
                        <View><Text style={[{letterSpacing: 0.5}, eventStyles.eventDetailsText]}><Text style={styles.bold}>{data.date.substring(0, 3)}</Text>{formatDate(data.date)}</Text></View>
                    </View>
                    <View style={eventStyles.eventDetailsItem}>
                        <View><Icon name='location' size={30} color={'white'}/></View>
                        <View style={eventStyles.vert}></View>
                        <View><Text style={eventStyles.eventDetailsText}>{data.location}</Text></View>
                    </View>
                    <View style={[eventStyles.eventDetailsItem, eventStyles.eventDetailsDesc]}>
                        <View style={eventStyles.eventDetailsItem}><View><Icon name='information-circle' size={30} color={'white'}/></View>
                        <View style={eventStyles.vert}></View></View>
                        <View><Text style={[eventStyles.eventDetailsText, {marginTop: 5, fontSize: 15}]}>{data.description}</Text></View>
                    </View>
                </View>
                {!isOwn && (<DiscoverIcons/>)}
            </View>
        </View>
    );
}
