import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

export default function LogoImage(props) {
  return <Image source={props.imageSouce} style={styles.logoImage} />;
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
