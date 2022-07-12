import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormSite from './components/FormSite';
import Login from './components/Login';

export default function App() {
  const [notLog,setNotLog]= useState(true)

  return (
    <View style={styles.container}>
      <FormSite />
      {notLog ?
      <Login login={() => setNotLog(false) } />
      : <View>
        <Text>Loggggéééééé</Text>
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
