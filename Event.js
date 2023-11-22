import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { StartUp } from './StartUp.js';
import { styles } from './Styles.js';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { CustomInputText } from './CustomInputText.js';
import { CustomButton } from './CustomButton.js';

// Event Object: Title, Date + Time, Image, Location, Description

export function EventView () {
    // header image given by user
    // - back button - edit button
    // DETAILS
    // - title
    // - dates
    // - location
    // - description
  return (
    <View styles={styles.event}>        
        <StatusBar style="auto" />
        <View styles={stylesEvent.headerContainer}>

        </View>
        <View styles={stylesEvent.detailsContainer}>
            <Text>Title</Text>
            <Text>Dates</Text>
            <Text>Location</Text>
            <Text>Description</Text>
        </View>
    </View>
  );
}


// state to decide if its edit or create?
export function EventForms ({ edit, navigation }) {
    const [image, setImage] = useState(null);

    const chooseEventImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
    
        console.log(result);
    
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    // date and time picker stuff
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const handleConfirm = () => {
        // some sort of thing to submit all this and either add/edit an event
        navigation.navigate('Calendar');
    };

    return (
        <View style={styles.eventForms}>
            <Text style={styles.formTitle}>{ edit ? 'Edit Event' : 'Create Event' }</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title="Pick an image from camera roll" onPress={chooseEventImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <View><CustomInputText heading={'Title'}/></View>
            <View>
                <Button onPress={showDatepicker} title="Choose Date" />
                <Button onPress={showTimepicker} title="Choose Time" />
                <Text>selected: {date.toLocaleString()}</Text>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}
            </View>
            <View><CustomInputText heading={'Location'}/></View>
            <View><CustomInputText heading={'Description'}/></View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'} onPress={handleConfirm}/></View>
        </View>
      );
}

export function AddEvent ({ navigation }) {
    return (
        <EventForms edit={false} navigation={navigation}/>
      );
}

const stylesEvent = StyleSheet.create({
    titleText: {
        fontSize: 35
    },
    attributeText: {
        fontSize: 25
    },
    detailsContainer: {
        alignItems: 'left'
    },
    headerContainer: {

    }
});