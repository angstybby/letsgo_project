import React, { Fragment } from 'react';
import { View } from 'react-native';
import { TopMenuComponent } from './TopMenu';
import { CalendarComponent } from './Calendar';
import { styles } from '../Styles';

export function CalendarScreenComponent () {
  

  return (
    <Fragment>
      <View style={styles.calendarScreenContainer}>
        <TopMenuComponent />
        <CalendarComponent />
      </View>
    </Fragment>
  );
}