import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput } from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/little-lemon-logo-grey.png')} />
      <Text style={styles.bodyText}>Subscribe to our newsletter for our latest delicious recipes</Text>
      <TextInput
        style={styles.emailInput} 
        value={email}
        onChangeText={onChangeEmail}
        placeholder='example@email.com'
      />
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginTop: 50,
    alignSelf: 'center'
  },
  bodyText: {
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center'
  },
  emailInput: {
    height: 40,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#333333',
    borderRadius: 10
  }
});
