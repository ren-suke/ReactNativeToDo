import React from 'react';
import {Switch} from 'react-native';

function TaskSwitch(props) {
  const {isOn, onChange} = props
  return(
    <Switch 
      value={isOn} 
      onValueChange={() => {onChange(!isOn)}} />
  )
}

export default TaskSwitch;