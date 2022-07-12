import React, { useEffect, useState } from 'react';
import { StyleSheet,ActivityIndicator,View } from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const WebViewSite = (props) => {
    const [urlToView,setUrlToView] = useState(props.url)
    const [load,setLoad]= useState(true)
    
    useEffect(() => {
      setUrlToView(props.url)
    },[props.url])

    return (
      <View style={{ flex: 1 }}>
        
        {load && (
          <ActivityIndicator
          size="large" color="#0000ff"
          />
        )}
        <WebView source={{ uri: urlToView }} onLoad={() => setLoad(false)} />
        </View> 
     );
}

export default WebViewSite;


