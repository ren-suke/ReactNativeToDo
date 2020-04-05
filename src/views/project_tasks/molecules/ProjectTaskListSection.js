import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { List } from 'react-native-paper';

import TaskSwitch from '../atoms/TaskSwitch';

const ProjectTaskListSection = (props) => {
  const { tag, taskSwitch } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return year + ' ' + [month, day].join('/');
  }
  return(
    <List.Accordion
      title={tag.title}
      left={props => <List.Icon {...props} icon="folder" />}
      expanded={isExpanded}
      onPress={() => { setIsExpanded(!isExpanded)}}>
      {
        tag.tasks.map(task => {
          return(
            <List.Item 
              title={task.title}
              description={formatDate(task.deadline)}
              left={props => <View {...props} style={{flex: 0.2}}></View>}
              right={props => <TaskSwitch {...props} isOn={task.isCompleted} onChange={newValue => taskSwitch.onChange(task.id, newValue)} />} />
          )
        })
      } 
    </List.Accordion>
  );
}

export default ProjectTaskListSection;