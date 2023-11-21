import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import React from 'react';
import { StartUp } from './StartUp.js';
import { styles } from './Styles.js';

const [image, setImage] = useState(null);

export function eventView ({ navigation }) {
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

// state to decide if its edit or create?
export function eventForms ({ navigation }) {
    return (
        <View styles={styles.eventForms}>        
            <StatusBar style="auto" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <View><CustomInputText heading={'Title'}/></View>
            <View>Date Upload</View>
            <View><CustomInputText heading={'Location'}/></View>
            <View><CustomInputText heading={'Description'}/></View>
        </View>
      );
}

// export function editEvent ({ navigation }) {
//     return (
//         <View styles={styles.eventForms}>        
//             <StatusBar style="auto" />
    
//         </View>
//       );
// }

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