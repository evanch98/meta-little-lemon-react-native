import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
  <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
  </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 250,
    width: 350,
    resizeMode: 'contain'
  }
});
