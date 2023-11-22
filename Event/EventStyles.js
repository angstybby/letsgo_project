import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const eventStyles = StyleSheet.create({
    eventImageBorder: {
        borderBottomWidth: 5,
        borderColor: 'green',
    },
    eventImage: {
        top: 0,
        height: 300,
        width: windowWidth,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    eventImageShadow: {
        borderBottomWidth: 5,
        borderColor: 'green',
        backgroundColor: 'transparent',
    },
    iconContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        paddingTop: 30,
    },
    eventContentContainer: {
        padding: 30,
    },
    eventHeadingText:{
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    eventDetailsContainer: {
        gap: 10,
    },
    eventDetailsItem: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    eventDetailsDesc: {
        alignItems: 'flex-start',
    },
    eventDetailsText: {
        color: 'white',
        fontSize: 18,
        width: Math.max(windowWidth - 125, 0),
    },
    vert: {
        height: 30,
        borderLeftWidth: 5,
        borderColor: 'green',
    },
})

export default eventStyles;