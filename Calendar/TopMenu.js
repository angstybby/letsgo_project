import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../Styles';
import { EditCalendarMenu } from './AddEventMenu.js';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export function TopMenuComponent () {
  return (
    <>
        <View style={styles.calendarHeaderContainer}>
            <View/>
            <View><Menu>
                <MenuTrigger><Text style={styles.calendarName}>Calendar Name...   <Icon name={'chevron-down-outline'} color="white" size={20}/></Text></MenuTrigger>
                <MenuOptions>
                    <View style={{ padding: 10, backgroundColor: 'white' }}>
                        <MenuOption text="Other Calendar Name" />
                        <MenuOption text="Another Calendar Name" />
                        <MenuOption text="Create New Calendar" customStyles={{ optionText: { color: 'red' }}}/>
                    </View>
                </MenuOptions>
            </Menu></View>
        </View>
        <View style={styles.topMenuContainer}>
            <View style={styles.calendarIconContainer}>
                <Image source={require('../assets/clouds.jpg')} style={styles.calendarIcon}/>
            </View>
            
            <View style={styles.calendarInfoContainer}>
                <Text style={styles.calendarInfoText}>Members: 8</Text>
                <Text style={styles.calendarInfoText}>Incoming Events: 5</Text>
                <Text style={styles.calendarInfoText}>Ideas: 5</Text>
            </View>
            <View style={styles.calendarIconsContainer}>
                <EditCalendarMenu />
            </View>
        </View>
    <View/>
    </>
  );
}
