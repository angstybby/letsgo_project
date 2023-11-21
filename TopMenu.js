import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './Styles';

export function TopMenuComponent () {

  const calendarIconPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Calendar_Icon_White.svg/1832px-Calendar_Icon_White.svg.png';

  return (
    <View style={styles.topMenuContainer}>
      <View style={styles.calendarIconContainer}>
        <Image source={{ uri: calendarIconPlaceholder }} style={styles.calendarIcon} />
      </View>
      <View style={styles.calendarInfoContainer}>
        <Text style={styles.calendarInfoText}>Members: 8</Text>
        <Text style={styles.calendarInfoText}>Incoming Events: 5</Text>
        <Text style={styles.calendarInfoText}>Ideas: 5</Text>
      </View>
    </View>
  );

}