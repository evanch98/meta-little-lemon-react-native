import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
  <View>
    <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
  </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  logo: {
    height: 300,
    width: 400,
    resizeMode: 'contain'
  }
});
