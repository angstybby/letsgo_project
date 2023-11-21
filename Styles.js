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
    calendar: {
        marginTop: 20,
    },
    topMenuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#292929',
      },
      profilePictureContainer: {
        marginRight: 10,
      },
      profilePicture: {
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
});
