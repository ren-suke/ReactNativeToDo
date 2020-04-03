import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import NewTagTextInput from '../atoms/NewTagTextInput';
import TagPickerView from '../atoms/TagPickerView';

function TagInputView() {
  const {newTagTextInput, tagPickerView} = props;
  return(
    <View style={styles.inputsContainer}>
      <Icon name="tags" type="AntDesign" />
      <Text>種類</Text>
      <View style={styles.inputsContainer}>
        <NewTagTextInput 
          text={newTagTextInput.text}
          onChangeText={text => newTagTextInput.onChangeText(text)}/>
        <TagPickerView 
          onChange={value => tagPickerView.onChange(value)}
          items={tagPickerView.items}
          value={tagPickerView.value} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  inputsContainer: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default TagInputView;