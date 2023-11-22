import React, { Fragment } from 'react';
import { View } from 'react-native';
import { TopMenuComponent } from './TopMenu';
import { CalendarComponent } from './Calendar';
import { AllEvents, EventView, AddEvent } from '../Event';
import { styles } from '../Styles';
import { createStackNavigator } from '@react-navigation/stack';

export function CalendarScreenComponent ({ }) {
  return (
    <Fragment>
      <View style={styles.calendarScreenContainer}>
        <TopMenuComponent />
        <CalendarComponent />
        <AllEvents />
      </View>
    </Fragment>
  );
}