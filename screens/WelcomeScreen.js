import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/little-lemon-logo.png')} />
        <Text style={styles.bodyText}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <View style={styles.secondContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 250,
    width: 350,
    resizeMode: 'contain',
  },
  bodyText: {
    fontSize: 30,
    marginTop: 50,
  },
  button: {
    fontSize: 22,
    padding: 5,
    marginVertical: 20,
    backgroundColor: '#007300',
    borderColor: '#007300',
    borderWidth: 2,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  secondContainer: {
    paddingHorizontal: 30
  }
});
