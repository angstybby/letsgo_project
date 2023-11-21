import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { styles } from './Styles';

export function AddEventMenuComponent ({ onDismiss }) {
  return (
    <View>
      <Menu>
        <MenuTrigger>
          <Text style={styles.plusIcon}>+</Text>
        </MenuTrigger>
        <MenuOptions>
          <View style={{ padding: 10, backgroundColor: 'white' }}>
            <MenuOption text="Add Event" />
          </View>
        </MenuOptions>
      </Menu>
    </View>
  );
}
