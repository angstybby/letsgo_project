import React, { useState, Fragment } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { TopMenuComponent } from './TopMenu';
import { CalendarComponent } from './Calendar';
import { AllEvents } from './Event';
import { styles } from './Styles';

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