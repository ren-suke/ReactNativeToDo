import React, {Component} from 'react';
import {View, Image, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {
  Button,
  Switch,
} from 'native-base';
import {List} from 'react-native-paper';
import ProjectCell from '../projects/molecules/ProjectCell';

class ProjectTasks extends Component {
  constructor(props) {
    super(props)

    console.log(props);
  }
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  render() {
    return (
      <SafeAreaView>
        <ProjectCell />
        <ScrollView>
          <List.Section>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              react-native-paper={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}>
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item title="task title" right={props => <Switch />} />
            </List.Accordion>
          </List.Section>
        </ScrollView>

        <Button style={styles.addProjectButton} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  addProjectButton: {
    width: 70,
    height: 70,
    bottom: 30,
    borderRadius: 50,
    backgroundColor: '#4285f4',
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default ProjectTasks;