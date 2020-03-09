import React, { Component } from 'react'
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import { addProject } from '../../store/action_creators/ProjectActionCreator'
import AddProjectTemplate from './AddProjectTemplate';

class AddProject extends Component {
  constructor() {
    super()

    this.state = {
      fabDisabled: false,
      projectTitle: '',
      projectImageURI: '../../ren.png',
    }
  }

  onPressProjectImageView = () => {
    console.log('onPressProjectImageView')
    ImagePicker.launchImageLibrary({allowsEditing: true}, (response) => {
      
      if(response.error) {
        console.log(error);
      } else {
        console.log(response.uri);
        const imageURI = { uri: response.uri };
        console.log(imageURI)
        this.setState({
          projectImageURI: imageURI
        })
      }
    })
  }

  onChangeProjectTitle = (text) => {
    console.log(text)
    if(text.length !== 0) {
      this.setState({
        projectTitle: text,
        fabDisabled: true
      })
    } else {
      this.setState({
        projectTitle: text
      })
    }
  }

  onPressFAB = () => {
    const { addProject } = this.props
    addProject(this.state.projectTitle, this.state.projectImageSouece)
  }

  render() {
    const projectInputView = {
      projectImageView: {
        onPress: () => { this.onPressProjectImageView() },
        source: { uri: this.state.projectImageURI }
      },
      projectTitleTextInput: {
        onChangeText: text => this.onChangeProjectTitle(text),
        text: this.state.projectTitle
      }
    }

    const fab = {
      onPress: this.onPressFAB,
      disabled: this.state.fabDisabled
    }

    return (
      <SafeAreaView style={{flex:1}}>
        <AddProjectTemplate
          style = {{backgroundColor: '#4285f4'}}
          projectInputView={projectInputView}
          fab={fab}
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (title, imageSouce) => dispatch(addProject(title, imageSouce))
  }
}

export default connect(null, mapDispatchToProps)(AddProject);
