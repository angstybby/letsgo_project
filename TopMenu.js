import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './Styles';

export function TopMenuComponent () {

  const profPicPlaceholder = 'https://static.vecteezy.com/system/resources/previews/010/056/184/original/people-icon-sign-symbol-design-free-png.png';

  return (
    <View style={styles.topMenuContainer}>
      <View style={styles.profilePictureContainer}>
        <Image source={{ uri: profPicPlaceholder }} style={styles.profilePicture} />
      </View>
      <View style={styles.calendarInfoContainer}>
        <Text style={styles.calendarInfoText}>Members: 8</Text>
        <Text style={styles.calendarInfoText}>Incoming Events: 5</Text>
        <Text style={styles.calendarInfoText}>Ideas: 5</Text>
      </View>
    </View>
  );

}