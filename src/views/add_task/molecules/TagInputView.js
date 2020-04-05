import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import NewTagTextInput from '../atoms/NewTagTextInput';
import TagPickerView from '../atoms/TagPickerView';

function TagInputView(props) {
  const {newTagTextInput, tagPickerView} = props;
  return(
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={styles.summaryViewContainer}>
          <Icon name="tags" type="AntDesign" />
          <Text style={{marginLeft: 10}}>種類</Text>
        </View>
        <NewTagTextInput
          text={newTagTextInput.text}
          onChangeText={text => newTagTextInput.onChangeText(text)}/>
      </View>
      <View style={styles.inputsContainer}>
        <View style={{flex: 0.5}}>
          <View></View>
          <View></View>
        </View>
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
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  inputsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  summaryViewContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

export default TagInputView;