import React, { useEffect,useState } from 'react';
import { View, TouchableOpacity, StyleSheet,Text,TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as WebBrowser from 'expo-web-browser';
import WebViewSite from './WebViewSite';


const wayback = require('./WaybackApi/Waybackfunctions');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  input: {
    height: 40,
    width:'80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },  
  button: {
    alignItems: "center",
    backgroundColor: "#AFBBF2",
    padding: 10
  }
});



const FormSite = () => {
    const [urlSite,setUrlSite] = useState({url:'', time:''})
    const [urlForm,setUrlForm]= useState('http://www.perdu.com')
    const [dateForm,setDAteForm]= useState(new Date())


    const padTo2Digits = (num) => {
      return num.toString().padStart(2, '0');
    }

    const findINfos = async () => {
      const dateFormat = ([dateForm.getFullYear(), padTo2Digits(dateForm.getMonth()+1), padTo2Digits(dateForm.getDay())].join(''))
      wayback.getInfos(urlForm,dateFormat).then(setUrlSite)
    }

    const goToWeb = async () => {
      let result = await WebBrowser.openBrowserAsync(urlSite.url);
    }

    return ( 
        <View>
          <Text>Merci de saissir une adresse mail.</Text>
        <TextInput
        style={styles.input}
        placeholder="http://"
        autoComplete='url'
        onChangeText={setUrlForm}
        value={urlForm}

        />
        <DateTimePicker mode="date" format="yyyymmdd"
        value={dateForm}
        onConfirm={setDAteForm}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        />

      <TouchableOpacity style={styles.button} onPress={() => findINfos()}>
        <Text>Find </Text>
      </TouchableOpacity>
      <View >
          <Text>Voici les informations : 
            {urlSite.url} /
            {urlSite.time}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => goToWeb()}>
        <Text>GO </Text>
      </TouchableOpacity>
      <WebViewSite url={urlSite.url}/>
    </View>
     );
}

export default FormSite;