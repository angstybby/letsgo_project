import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { styles } from './Styles';
import { eventForms, eventView } from './Event'
import { useNavigation } from '@react-navigation/native';

export function AddEventMenuComponent () {
  const navigation = useNavigation();
  return (
    <View>
      <Menu>
        <MenuTrigger>
          <Text style={styles.meatballIcon}>...</Text>
        </MenuTrigger>
        <MenuOptions>
          <View style={{ padding: 10, backgroundColor: 'white' }}>
            <MenuOption text="Edit Calendar" />
          </View>
        </MenuOptions>
      </Menu>
      <Menu>
        <MenuTrigger>
          <Text style={styles.plusIcon}>+</Text>
        </MenuTrigger>
        <MenuOptions>
          <View style={{ padding: 10, backgroundColor: 'white' }}>
            <MenuOption 
              text="Add Event"
              onSelect={() => navigation.navigate('EventView')}
            />
          </View>
        </MenuOptions>
      </Menu>
      
    </View>
  );
}
