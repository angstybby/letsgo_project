import { StyleSheet } from 'react-native';

const dStyles = StyleSheet.create({
    discover: {
        padding: 15,
    },
    discoverHeaderContainer: {
        paddingTop: 35,
        paddingBottom: 10,
    },
    discoverTrackHeading: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    discoverImage: {
        width: 270,
        height: 160,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.14)',
    },
    discoverLocationText: {
        opacity: 0.75,
    },
    discoverDateText: {
        color: 'white',
        opacity: 0.75,
        paddingTop: 5,
    },
    discoverTitleText: {
        color: 'white',
        opacity: 0.9,
        fontSize: 20,
    },
    discoverPlaceholder: {
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 8,
    }
});

export default dStyles;