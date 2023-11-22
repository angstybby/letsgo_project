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
        justifyContent: 'space-between',

    },
    topMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#292929',
    },
    calendarName: {
        paddingLeft: 15,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
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
    }
});
