import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base'
import DatePickerView from '../atoms/DatePickerView';

function DeadlinePickerView(props) {
  const {datePickerView} = props;
  return(
    <View style={styles.container}>
      <View style={styles.summaryViewContainer}>
        <Icon name="ios-timer" type="Ionicons" />
        <Text style={{marginLeft: 10}}>期限</Text>
      </View>
      <View style={{flex: 0.5}}>
        <DatePickerView 
          style={{flex: 1}}
          date={datePickerView.date}
          onDateChange={date => datePickerView.onDateChange(date)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  summaryViewContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default DeadlinePickerView;