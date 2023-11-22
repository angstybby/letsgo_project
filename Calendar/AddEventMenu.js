import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { styles } from '../Styles';
import { useNavigation } from '@react-navigation/native';

export function EditCalendarMenu () {
  return (
    <View>
        <Menu>
            <MenuTrigger>
                <Icon name='ellipsis-horizontal' size={30} color={'white'}/>
            </MenuTrigger>
            <MenuOptions>
                <View style={{ padding: 10, backgroundColor: 'white' }}>
                    <MenuOption text="Edit Calendar" />
                </View>
            </MenuOptions>
        </Menu>     
    </View>
  );
}

export function AddEventMenu({}) {
    const navigation = useNavigation();
    return (
        <View style={styles.addEventIcon}>
            <Menu>
                <MenuTrigger>
                    <Icon name={'add-circle'} color={'white'} size={70}/>
                </MenuTrigger>
                <MenuOptions>
                    <View style={{ padding: 10, backgroundColor: 'white' }}>
                        <MenuOption text="Add Event" onSelect={() => navigation.navigate('AddEvent')}/>
                    </View>
                </MenuOptions>
            </Menu>
        </View>
    );
}
