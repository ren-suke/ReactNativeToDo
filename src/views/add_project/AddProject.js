import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import {addProject} from '../../store/action_creators/ProjectActionCreator';
import AddProjectTemplate from './AddProjectTemplate';

class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      fabDisabled: false,
      projectTitle: '',
      projectImageSource: require('../../ren.png'),
    };
  }

  onPressProjectImageView = () => {
    console.log('onPressProjectImageView');
    ImagePicker.launchImageLibrary({allowsEditing: true}, response => {
      if (response.error) {
        console.log(response.error);
      } else {
        const imageSource = {uri: response.uri};
        console.log(imageSource);
        this.setState({
          projectImageSource: imageSource,
        });
      }
    });
  };

  onChangeProjectTitle = text => {
    console.log(text);
    if (text.length !== 0) {
      this.setState({
        projectTitle: text,
        fabDisabled: true,
      });
    } else {
      this.setState({
        projectTitle: text,
      });
    }
  };

  onPressFAB = () => {
    const {addProject} = this.props;
    addProject(this.state.projectTitle, this.state.projectImageSource);
  };

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
      disabled: this.state.fabDisabled,
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

export default connect(
  null,
  mapDispatchToProps,
)(AddProject);
