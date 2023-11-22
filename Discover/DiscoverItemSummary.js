import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import dStyles from './DiscoverStyles.js'
import { styles } from '../Styles.js';

function formatDate(date) {
    var temp = date.split(' ');
    return(' ' + temp[1] + ' ' + temp[2].substring(0, 3) + ', ' + temp[3]);
}

export default function DiscoverItemTrack({ data }) {
    return (
        <>
            <Text style={dStyles.discoverTrackHeading}>{data.title}</Text>
            <FlatList
                    data={data.content}
                    renderItem={({ item }) => <DiscoverItemSummary data={item}/>}
                    ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    horizontal={true}
            />
        </>
    )
}

function DiscoverItemSummary({ data }) {
    return (
        <View>
        {!data ? 
        (< View style={[dStyles.discoverImage, dStyles.discoverPlaceholder]}>
            <Icon name={'heart-circle'} color={'white'} size={70} opacity={0.5}/>
            <Text style={[dStyles.discoverDateText, styles.bold]}>oops!</Text>
            <Text style={[dStyles.discoverDateText, {width: 180, textAlign: 'center'}]}>{'Your favourited events will appear here!'}</Text>
        </View>)
            :
        (<>
            <Image style={dStyles.discoverImage} source={data.image}/>
            <Text style={dStyles.discoverDateText}><Text style={styles.bold}>{data.date.substring(0, 3)}</Text>{formatDate(data.date)}</Text>
            <Text style={dStyles.discoverTitleText}>{data.title}</Text>
        </>)
        }
        </View>
    )
}
