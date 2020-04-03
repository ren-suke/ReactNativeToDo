import React, { useState } from 'react';
import { List } from 'react-native-paper';

import TaskSwitch from '../atoms/TaskSwitch';

const ProjectTaskListSection = (props) => {
  const { tag, taskSwitch } = props
  const [isExpanded, setIsExpanded] = useState(false);
  return(
    <List.Accordion
      title={tag.title}
      left={props => <List.Icon {...props} icon="folder" />}
      expanded={isExpanded}
      onPress={setIsExpanded(!isExpanded)}>
      {
        tag.tasks.map(task => {
          <List.Item 
            title={task.title}
            description={task.deadline.toString()}
            right={props => <TaskSwitch isOn={tag.isCompleted} onChange={newValue => taskSwitch.onChange(task.id, newValue)} />} />
        })
      }
    </List.Accordion>
  );
}

export default ProjectTaskListSection;