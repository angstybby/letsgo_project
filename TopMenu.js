import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './Styles';
import { AddEventMenuComponent } from './AddEventMenu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export function TopMenuComponent () {

  const calendarIconPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Calendar_Icon_White.svg/1832px-Calendar_Icon_White.svg.png';

  return (
    <>
      <View style={styles.calendarTitleDropdown}>
        <Text style={styles.calendarInfoTextTitle}>Calendar Name</Text>
        <View style={styles.dropDownContainer}>
          <Menu>
            <MenuTrigger>
              {/* <Text style={styles.dropDown}>v</Text> */}
              <Image style={styles.dropDown} source={require('./assets/dropdown.png')} />
            </MenuTrigger>
            <MenuOptions>
              <View style={{ padding: 10, backgroundColor: 'white' }}>
                <MenuOption text="Other Calendar Name" />
                <MenuOption text="Another Calendar Name" />
                <MenuOption text="Create New Calendar" customStyles={{ optionText: { color: 'red' }}}/>
              </View>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={styles.topMenuContainer}>
      <View style={styles.calendarIconContainer}>
        <Image source={{ uri: calendarIconPlaceholder }} style={styles.calendarIcon} />
      </View>
      
      <View style={styles.calendarInfoContainer}>
        {/* <Text style={styles.calendarInfoTextTitle}>Calendar Name</Text> */}
        <Text style={styles.calendarInfoText}>Members: 8</Text>
        <Text style={styles.calendarInfoText}>Incoming Events: 5</Text>
        <Text style={styles.calendarInfoText}>Ideas: 5</Text>
      </View>
      <View style={styles.calendarIconsContainer}>
        <AddEventMenuComponent />
      </View>
    </View>
    </>
  );

}