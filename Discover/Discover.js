import React from 'react';
import { View, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import dStyles from './DiscoverStyles.js';
import DiscoverItemTrack from './DiscoverItemSummary.js';
import discoverData from './DiscoverData.js';
import SearchBar from '../Components/SearchBar.js';
import EventPage from '../Event/EventPage.js'

const Stack = createStackNavigator();

export default function Discover() {
    return (
            <Stack.Navigator screenOptions={{
            cardStyle: { backgroundColor: '#292929' },
            headerBackTitle: 'back',
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: 'white',
        }}>
            <Stack.Screen name="DiscoverScreen" component={DiscoverScreen}/>
            <Stack.Screen name="EventScreen" component={EventScreen}/>
        </Stack.Navigator>
    )
}

function DiscoverScreen ({ navigation }) {
    return (
        <View style={dStyles.discover}>
            <View style={dStyles.discoverHeaderContainer}>
                <SearchBar placeHolder={'Search for events, venues, and keywords'}/>
            </View>
            <View>
                <FlatList
                    data={discoverData}
                    renderItem={({ item }) => <DiscoverItemTrack data={item} nav={navigation}/>}
                    ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
                    ListFooterComponent={<View style={{ height: 70 }} />}
                />
            </View>
        </View>
    );
}

function EventScreen ({ navigation, route }) {
    const { data } = route.params;

    return (
        <EventPage data={data}/>
    )

}