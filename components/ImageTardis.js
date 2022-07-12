import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const ImageTardis = () => {
    return ( 
    <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      />
     );
}

export default ImageTardis;


