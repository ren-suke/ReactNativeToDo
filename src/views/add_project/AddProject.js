import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';
import {addProject} from '../../store/action_creators/ProjectActionCreator';
import AddProjectTemplate from './AddProjectTemplate';

class AddProject extends Component {
  constructor() {
    super();
    console.log('AddProject Constructor')
    this.state = {
      canAddProject: false,
      projectTitle: '',
      projectImageSource: require('../../placeholder.png'),
    };
  }

  onPressProjectImageView = () => {
    ImagePicker.launchImageLibrary({allowsEditing: true}, response => {
      if (response.error) {
        console.log(response.error);
      } else {
        const imageData = 'data:image/png;base64,' + response.data
        this.setState({
          projectImageSource: {uri: imageData},
          canAddProject: this.validate()
        });
      }
    });
  };

  onChangeProjectTitle = text => {
    this.setState({
      projectTitle: text,
      canAddProject: this.validate()
    });
  };

  onPressFAB = () => {
    const {addProject} = this.props;
    addProject(this.state.projectTitle, this.state.projectImageSource);
    Navigation.dismissModal(this.props.componentId);
  };

  validate = () => {
    return this.state.projectTitle != '' || this.state.imageSource != require('../../placeholder.png');
  }

  render() {
    const projectInputView = {
      projectImageView: {
        onPress: () => {
          this.onPressProjectImageView();
        },
        source: this.state.projectImageSource,
      },
      projectTitleTextInput: {
        onChangeText: text => this.onChangeProjectTitle(text),
        text: this.state.projectTitle,
      },
    };

    const fab = {
      onPress: this.onPressFAB,
      disabled: !this.state.canAddProject,
    };

    return (
      <SafeAreaView style={{flex: 1}}>
        <AddProjectTemplate
          style={{backgroundColor: '#4285f4'}}
          projectInputView={projectInputView}
          fab={fab}
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProject: (title, imageSource) =>
      dispatch(addProject(title, imageSource)),
  };
};

export default connect(null, mapDispatchToProps)(AddProject);
