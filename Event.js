import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState, useContext, useEffect } from 'react';
import { StartUp } from './StartUp.js';
import { styles } from './Styles.js';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, FlatList } from 'react-native';
import { CustomInputText } from './CustomInputText.js';
import { CustomButton } from './CustomButton.js';
import App from './App.js';

// Event Object: Title, Date + Time, Image, Location, Description

export function EventView ({ route, navigation }) {
    const { event } = route.params;
    if (event == null) {
        // make event with default params
        event = makeEvent("Sample Title", "Description", "assets\\icon.png", "location", new Date(1598051730000))
    }
    // header image given by user
    // - back button - edit button
    // DETAILS
    // - title
    // - dates
    // - location
    // - description
  return (
    <View style={styles.event}>        
        <View style={stylesEvent.headerContainer}>

        </View>
        <View style={stylesEvent.detailsContainer}>
            <Text>{event.title}</Text>
            <Text>Dates</Text>
            <Text>Location</Text>
            <Text>Description</Text>
        </View>
    </View>
  );
}


// state to decide if its edit or create?
export function EventForms ({ edit, handleEvent }) {
    const navigation = useNavigation();
    // STATES: title, dates, location, description, image
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(new Date(1598051730000));
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

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
    const onChangeDate = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };

    const handleConfirm = () => {
        if (!edit) {
            console.log(makeEvent(title, description, image, location, date))
        }
        navigation.navigate('Calendar');
    };

    return (
        <View style={styles.eventForms}>
            <Text style={styles.formTitle}>{ edit ? 'Edit Event' : 'Create Event' }</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title="Pick an image from camera roll" onPress={chooseEventImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <View>
                <CustomInputText 
                    heading={'Title'}
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
            </View>
            <View>
                <Text>selected: {date.toLocaleString()}</Text>
                <View>
                    <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChangeDate}
                    />
                    <DateTimePicker
                    testID="timePicker"
                    value={date}
                    mode={'time'}
                    is24Hour={true}
                    onChange={onChangeDate}
                    />
                </View>
            </View>
            <View>
                <CustomInputText
                    heading={'Location'}
                    value={location}
                    onChangeText={text => setLocation(text)}
                />
            </View>
            <View>
                <CustomInputText 
                    heading={'Description'}
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
            </View>
            <View style={{marginTop: 20}}><CustomButton body={'Confirm'} onPress={handleConfirm}/></View>
        </View>
      );
}

export function AddEvent ({ route, navigation }) {
    return (
        <EventForms edit={false}/>
      );
}

export function AllEvents ({}) {
    const navigation = useNavigation();
    const [events, setEvents] = useState([]);

    const addEventToEvents = (title, description, image, location, date) => {
        const newEvent = makeEvent(title, description, image, location, date);
        setEvents([... events, newEvent]);
    }

    // add some default events
    React.useEffect(() => {
        const tempEvents = []
        tempEvents.push(makeEvent("Julia's 21st", "21st birthday party", "assets\\event-test.jpeg", "Julia's House", new Date(1598051730000)))
        tempEvents.push(makeEvent("Concert", "yayyyy music", "assets\\event-test.jpeg", "Hordern Pavilion", new Date(1598051730000)))
        setEvents(tempEvents)
    }, []);

    const renderItem = ({item, index}) => {
        const onPress = () => {
            navigation.navigate('EventView', {event: item})
        }
        return (
            <TouchableOpacity onPress={onPress}>
                <View>
                    <Text style={stylesEvent.headingText}>{item.title}</Text>
                    <Text style={stylesEvent.location}>{item.location}</Text>
                </View>
            </TouchableOpacity>
        )
      }
    
    const handleAdd = () => {
        navigation.navigate('AddEvent', { addEventToEvents })
    }

    return (
        <View>
            <Text style={styles.calendarInfoTextTitle}>Upcoming Events</Text>
            <FlatList
                data={events}
                renderItem={renderItem}
            />
        </View>

    );
}

// Make event object with following attributes
// - title
// - dates
// - location
// - description
const makeEvent = (title, description, image, location, date) => {
    return ({
      title: title,
      description: description,
      image: image,
      location: location,
      date: date,
    });
  }

//   export const EventsContext = React.createContext();
//   export function createEvents() {
//       const [events, setEvents] = useState([]);
    
//       return (
//         <EventsContext.Provider value={{ events, setEvents }}>
//           <App />
//         </EventsContext.Provider>
//       );
//   }

// export const [events, setEvents] = useState([]);

const stylesEvent = StyleSheet.create({
    titleText: {
        fontSize: 35
    },
    attributeText: {
        fontSize: 25
    },
    headingText: {
        fontSize: 30
    },
    detailsContainer: {
        alignItems: 'left'
    },
    headerContainer: {

    }
});