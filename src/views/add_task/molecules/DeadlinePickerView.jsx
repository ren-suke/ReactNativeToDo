import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base'
import DatePickerView from '../atoms/DatePickerView';

function DeadlinePickerView(props) {
  const {datePickerView} = props
  return(
    <View style={styles.container}>
      <Icon name="ios-timer" type="Ionicons" />
      <Text>期限</Text>
      <DatePickerView 
        date={datePickerView.date}
        onChange={date => datePickerView.onDateChange(date)}
      />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: row
  }
});

export default DeadlinePickerView;