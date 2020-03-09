import React, {Component} from 'react'
import { View, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Switch, Text } from 'native-base';
import { List } from 'react-native-paper';

export default class ProjectTasks extends Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>タスク一覧</Title>
          </Body>
          <Right/>
        </Header>
        <ScrollView>
          <List.Section>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expandedyarn add react-native-paper
              ={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
            <List.Accordion
              title="Controlled Accordion"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={this.state.expanded}
              onPress={this._handlePress}
            >
              {/* <List.Item title="First item" />
              <List.Item title="Second item" /> */}
              <List.Item
                title="task title"
                right={props => <Switch />}
              />
            </List.Accordion>
          </List.Section>
        </ScrollView>

        <Button style={styles.addProjectButton} />
      </Container>
    )
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
    position: 'absolute'
    
  }
});