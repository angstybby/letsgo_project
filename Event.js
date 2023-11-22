import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { styles } from './Styles.js';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, FlatList, SafeAreaView, } from 'react-native';
import { CustomInputText } from './Components/CustomInputText.js';
import { CustomButton } from './Components/CustomButton.js';


// Event Object: Title, Date + Time, Image, Location, Description

export function EventView ({ route, navigation }) {
    const { event } = route.params;
    if (event == null) {
        // make event with default params
        event = makeEvent("Sample Title", "Description", "./assets/event-test.jpeg", "location", new Date(1598051730000))
    }
    // header image given by user
    // - back button - edit button
    // DETAILS
    // - title
    // - dates
    // - location
    // - descriptionsource={require('./assets/icon.png')}
  return (
    <View style={styles.event}>        
        <View style={stylesEvent.headerContainer}>
            <Image source={require('./assets/event-test.jpeg')} style={{ width: 200, height: 200 }} />
        </View>
        <View style={stylesEvent.detailsContainer}>
            <Text style={styles.calendarInfoTextTitle}>{event.title}</Text>
            <Text style={styles.calendarInfoText}>{event.date.toLocaleString()}</Text>
            <Text style={styles.calendarInfoText}>{event.location}</Text>
            <Text style={styles.calendarInfoText}>{event.description}</Text>
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
                    <Text style={styles.upcomingEventHeading}>{item.title}</Text>
                    <Text style={styles.upcomingEventLocation}>{item.location}</Text>
                </View>
            </TouchableOpacity>
        )
      }
    
    const handleAdd = () => {
        navigation.navigate('AddEvent', { addEventToEvents })
    }

    return (
        <View style={styles.upcomingEventsContainer}>
            <Text style={styles.upcomingEvents}>Upcoming Events</Text>
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


const stylesEvent = StyleSheet.create({
    titleText: {
        fontSize: 35
    },
    attributeText: {
        fontSize: 25,
        color: 'white'
    },
    headingText: {
        fontSize: 30,
        color: 'white'
    },
    detailsContainer: {
        alignItems: 'left'
    },
    location: {
        fontSize: 20,
        color: 'white'
    },
    headerContainer: {

    }
});