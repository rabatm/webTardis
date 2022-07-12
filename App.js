import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import FormSite from './components/FormSite';
import Login from './components/Login';

export default function App() {
  const [notLog,setNotLog]= useState(true)

  return (
    <SafeAreaView style={styles.container}>
      {notLog ?
      <Login login={() => setNotLog(false) } />
      : <View>
        <FormSite/>
      </View>
      }
    </SafeAreaView>
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
