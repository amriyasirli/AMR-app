import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Text, StatusBar, StyleSheet, ScrollView } from 'react-native';
import EmailSignIn from '../../components/EmailSignIn';
import GoogleSignIn from '../../components/GoogleSignIn';
import PhoneSignIn from '../../components/PhoneSignIn';

GoogleSignin.configure({
  webClientId: '660823802611-mv5jpjo8tfch0f47unsh2slpantvhr0u.apps.googleusercontent.com',
});

const App = () => {

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Text style={styles.text}>Firebase Authentications</Text>
      <GoogleSignIn />
      <EmailSignIn />
      <PhoneSignIn />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
})

export default App;