import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

function ProjectImageView(props) {
  const { onPress, source } = props
  return(
    <TouchableOpacity onPress={() => { onPress() }}>
      <Image 
        source={source}
        style={styles.projectImageView}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  projectImageView: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#333',
    borderWidth: 1
  }
});

export default ProjectImageView;