import React, {Component} from 'react'
import { View, Image, StyleSheet, TextInput, Picker, Dimensions } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Card, CardItem, Text, Grid, Col, Row } from 'native-base';

export default class AddTask extends Component {
  state = {
    area: 2,
    date: "2019-10-10"
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>タスクを追加</Title>
          </Body>
          <Right>
            <Icon name='close' />
          </Right>
        </Header>
        <View>
          <View styles={styles.projectInputContainer}>
            <View>              
              <TextInput style={styles.projectTitleTextInput} placeholder=" Your Task" />
            </View>
            <Grid>
              <Row style={{ height: 50}}>
                <Col size="2">
                  <Icon style={{ alignSelf: 'center'}} name="pencil" />
                </Col>
                <Col size="3">
                  <Text style={{ lineHeight: 50, alignSelf: 'flex-start' }} >プロジェクト</Text>
                </Col>
                <Col size="5">
                  <Text style={{ lineHeight: 50, alignSelf: 'center' }} >プロジェクト名</Text>
                </Col>
              </Row>
              <Row style={{ height: 100}}>
                <Col size="2">
                  <Icon style={{ alignSelf: 'center'}} name="pencil" />
                </Col>
                <Col size="3">
                  <Text style={{ lineHeight: 50, alignSelf: 'flex-start' }} >種類</Text>
                </Col>
                <Col size="5">
                  <Row>
                    <TextInput placeholder="種類を追加" />
                  </Row>
                  <Row>
                    <RNPickerSelect
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                      ]}
                    />
                  </Row>
                </Col>
              </Row>
              <Row style={{ height: 50}}>
                <Col size="2">
                  <Icon style={{ alignSelf: 'center'}} name="pencil" />
                </Col>
                <Col size="3">
                  <Text style={{ lineHeight: 50, alignSelf: 'flex-start' }} >期限</Text>
                </Col>
                <Col size="5">
                  <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                  />
                </Col>
              </Row>
            </Grid>
          </View>
        </View>
        <Button style={styles.addProjectButton} />
      </Container>
    )
  }
}

const { width, height } = Dimensions.get('window');
const halfHeight = height/2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  projectInputContainer: {
    width: width,
    height: halfHeight,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  projectTitleTextInput: {
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    width: 300,
    height: 50
  },
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
