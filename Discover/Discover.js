import React from 'react';
import { View, FlatList } from 'react-native';

import dStyles from './DiscoverStyles.js';
import DiscoverItemTrack from './DiscoverItemSummary.js';
import discoverData from './DiscoverData.js';
import SearchBar from '../Components/SearchBar.js';

export default function Discover() {
    return (
        <View style={dStyles.discover}>
            <View style={dStyles.discoverHeaderContainer}>
                <SearchBar placeHolder={'Search for events, venues, and keywords'}/>
            </View>
            <View>
                <FlatList
                    data={discoverData}
                    renderItem={({ item }) => <DiscoverItemTrack data={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
                />
            </View>
        </View>
    )
}