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
    topMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
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
      fontSize: 12,
      marginBottom: 5,
    },
    calendarInfoTextTitle: {
        color: 'white',
        fontSize: 16,
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
    plusIconContainer: {
        marginRight: 10,
        paddingBottom: 50,
    }
});
