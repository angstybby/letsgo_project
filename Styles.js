import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
    },
    startContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    startupLinkText: {
        fontSize: 17,
        color: 'white',
        textDecorationLine: 'underline',
    },
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    calendarScreenContainer: {
        padding: 15,
        paddingTop: 40,        
    },
    calendarHeaderContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    topMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#292929',
    },
    calendarName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    calendarIconContainer: {
      marginRight: 10,
    },
    calendarIcon: {
        width: 70,
        height: 70,
        marginLeft: 10,
        borderRadius: 50,
    },
    calendarInfoContainer: {
      flex: 1,
      marginLeft: 10,
    },
    calendarInfoText: {
      color: 'white',
      fontSize: 14,
      marginBottom: 5,
    },
    addEventIcon: {
        position: 'absolute',
        top: 675,
        right: 15,
    },
    calendarIconsContainer: {
        marginRight: 10,
        bottom: 20,
    },
    meatballIcon: {
        fontSize: 45,
        color: 'white',
        fontWeight: '200',
    },
    dropDown: {
        width: 20,
        height: 25,
        marginLeft: 10,
    },
    event: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        fontSize: 25,
        color: 'white',
    },
    eventForms: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 10,
        paddingTop: 50,
    },
    formTitle: {
        fontSize: 45,
        color: 'white',
        fontWeight: '200',
    },
    upcomingEvents: {
        paddingBottom: 5,
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    upcomingEventsContainer: {
        paddingTop: 15,
        paddingLeft: 20,
        backgroundColor: '#3e3f40',
        marginTop: 20,
        paddingBottom: 15,
        borderRadius: 15,
    },
    upcomingEventHeading: {
        paddingTop: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: '500',

    },
    upcomingEventLocation: {
        color: 'white',
    }

});
