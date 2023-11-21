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
export function EventForms ({ edit }) {
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

    return (
        <View styles={styles.eventForms}>        
            <StatusBar style="auto" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={chooseEventImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <View><CustomInputText heading={'Title'}/></View>
            <Text>Date Upload</Text>
            <View><CustomInputText heading={'Location'}/></View>
            <View><CustomInputText heading={'Description'}/></View>
        </View>
      );
}

export function AddEvent ({ navigation }) {
    return (
        <View>        
            <EventForms edit={false}/>
        </View>
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