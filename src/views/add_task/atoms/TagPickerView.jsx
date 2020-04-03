import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

function TagPickerView(props) {
  const {onChange, items, value} = props;
  return(
    <RNPickerSelect
      onValueChange={value => onChange(value)}
      items={items}
      value={value}
    />
  )
}

export default TagPickerView;