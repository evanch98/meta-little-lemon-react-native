import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
  <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
    <Text style={styles.bodyText}>Little Lemon, your local Mediterranean Bistro</Text>
  </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 250,
    width: 350,
    resizeMode: 'contain',
  },
  bodyText: {
    fontSize: 30
  }
});
