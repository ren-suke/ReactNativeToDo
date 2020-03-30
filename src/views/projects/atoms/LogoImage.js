import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

function LogoImage(props) {
  const { source } = props;
  return <Image source={source} style={styles.logoImage} />;
}

const styles = StyleSheet.create({
  logoImage: {
    width: 50,
    height: 50,
    backgroundColor: '#4285f4',
    borderRadius: 50,
    borderColor: '#333',
    borderWidth: 1,
  },
});

export default LogoImage;