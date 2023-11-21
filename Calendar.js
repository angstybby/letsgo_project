import React, { useState, Fragment, useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import { Calendar, CalendarUtils } from 'react-native-calendars';
import { styles } from './Styles';

const todaysDate = new Date();

const year = todaysDate.getFullYear();
const month = todaysDate.getMonth() + 1; 
const day = todaysDate.getDate();

const formattedTodaysDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

export function CalendarComponent ({navigation}) {
  
  const [selected, setSelected] = useState(formattedTodaysDate);
  
  const getDate = (count) => {
    const date = new Date(formattedTodaysDate);
    date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(date);
  };
  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [getDate(4, 3)]: {
        dotColor: 'grey',
        marked: true
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'white',
        selectedTextColor: 'black'
      }
    };
  }, [selected]);
  
  return (
    <Fragment>
      <Calendar
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#292929',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          textDisabledColor: 'grey',
          monthTextColor: 'white',
          dayTextColor: 'white',

        }}
        enableSwipeMonths
        current={formattedTodaysDate}
        style={styles.calendar}
        onDayPress={onDayPress}
        markedDates={marked}
      />
    </Fragment>
  );
  
};
