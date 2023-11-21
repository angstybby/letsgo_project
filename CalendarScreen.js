import React from 'react';
import { View } from 'react-native';
import { TopMenuComponent } from './TopMenu';
import { CalendarComponent } from './Calendar';

export function CalendarScreenComponent () {
  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 100 }}>
      <TopMenuComponent />
      <CalendarComponent />
    </View>
  );
}