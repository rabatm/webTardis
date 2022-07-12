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
    height: 40,
    width:60,
    alignItems: "center",
    backgroundColor: "#AFBBF2",
    
  }
});

const FormSite = () => {
    const [urlSite,setUrlSite] = useState({url:'', time:''})
    const [urlForm,setUrlForm]= useState('http://www.perdu.com')
    const [dateForm,setDAteForm]= useState(new Date())
    const [showPreview,setShowPreview]= useState(false)
    const [showInfos,setShowInfos]= useState(false)

    const padTo2Digits = (num) => {
      return num.toString().padStart(2, '0');
    }

    const findINfos = async () => {
      const dateFormat = ([dateForm.getFullYear(), padTo2Digits(dateForm.getMonth()+1), padTo2Digits(dateForm.getDay())].join(''))
      wayback.getInfos(urlForm,dateFormat).then((s) => {
        setUrlSite(s)
        setShowInfos(true)
     })
    }

    const goToWeb = async () => {
      await WebBrowser.openBrowserAsync(urlSite.url);
    }

    const updateViewBut = () => {
      (showPreview) ? setShowPreview(false) : setShowPreview(true)
    }

    return ( 
        <View style={{flex:1}}>
          <Text>Merci de saissir l'adresse du site web.</Text>
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
    <View style={{flex:1}}>
      {(showInfos) &&   
      <View style={{flex:1}}>
      <Text >Voici les informations : </Text>
      <Text >{urlSite.url} </Text>
      <Text >{urlSite.time}</Text>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}} >
        <TouchableOpacity style={styles.button} onPress={() => goToWeb()}>
          <Text>GO </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => updateViewBut()}>
          <Text>Preview</Text>
        </TouchableOpacity>
      </View>
      {(showPreview) && <WebViewSite url={urlSite.url}/> }
      </View>
    }
      </View>
    </View>
     );
}

export default FormSite;