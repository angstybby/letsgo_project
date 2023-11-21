import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    site: {
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
    calendar: {},
    calendarTitleDropdown: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    topMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#292929',
    },
    calendarIconContainer: {
      marginRight: 10,
    },
    calendarIcon: {
      width: 70,
      height: 70,
      marginLeft: 10,
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
    calendarInfoTextTitle: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    calendarScreenContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 100,
    },
    plusIcon: {
        fontSize: 45,
        color: 'white',
        fontWeight: '200',
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
    }
});
