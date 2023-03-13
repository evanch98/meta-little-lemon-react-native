import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/little-lemon-logo-grey.png')} />
      <Text style={styles.bodyText}>Subscribe to our newsletter for our latest delicious recipes</Text>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginTop: 50
  },
  bodyText: {
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center'
  }
});
