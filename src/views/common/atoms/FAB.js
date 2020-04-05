import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'native-base';
import {Icon} from 'native-base';

function FAB(props) {
  const {onPress, disabled} = props;
  return (
    <Button
      rounded
      onPress={() => {
        onPress();
      }}
      disabled={disabled}
      style={styles.fab}>
      <Icon name="plus" type="AntDesign" />
    </Button>
  );
}

const styles = StyleSheet.create({
  fab: {
    width: 70,
    height: 70,
    bottom: 30,
    borderRadius: 50,
    backgroundColor: '#4285f4',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default FAB;
