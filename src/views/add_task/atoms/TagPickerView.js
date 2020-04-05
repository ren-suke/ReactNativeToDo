import React from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const pickerStyle = {
	inputIOS: {
		paddingTop: 13,
		paddingHorizontal: 10,
    paddingBottom: 12,
    alignSelf: 'center'
  },
  inputAndroid: {
    paddingTop: 13,
		paddingHorizontal: 10,
    paddingBottom: 12,
    alignSelf: 'center'
  }
};

function TagPickerView(props) {
  const {onChange, items, value} = props;
  return(
    <View style={styles.container}>
      <RNPickerSelect
        style={pickerStyle}
        onValueChange={value => onChange(value)}
        items={items}
        value={value}
        placeholder={{
          label: 'タグを選択',
          value: null,
        }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TagPickerView;