import { Navigation } from 'react-native-navigation';
import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {withReduxProvider} from './src/store/index'
import Projects from './src/views/projects/Projects';
import AddProject from './src/views/add_project/AddProject';
import ProjectTasks from './src/views/project_tasks/ProjectTasks';
import AddTask from './src/views/add_task/AddTask';
import{PROJECTS, ADDPROJECT, PROJECTTASKS, ADDTASK} from './src/views/screens'

const screens = [];
screens.push({name: PROJECTS, component: Projects});
screens.push({name: ADDPROJECT, component: AddProject});
screens.push({name: PROJECTTASKS, component: ProjectTasks});
screens.push({name: ADDTASK, component: AddTask});

for(let screen of screens) {
  console.log(screen);
  Navigation.registerComponent(
    screen.name,
    () => withReduxProvider(screen.component),
  );
}

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
                name: PROJECTS,
                options: {
                  topBar: {
                      visible: true,
                      leftButtons: [
                        {
                          id: 'edit',
                          title: 'edit'
                        },
                      ],
                      title: {
                          text: 'Projects',
                      },
                  },
                },
            },
          }
        ],
      }
    }
  })
}
