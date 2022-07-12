import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
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
    const [urlToView] = useState(props.url)
    console.log(urlToView)
    useEffect(() => {
      
    })

    return ( 
        <WebView
        source={{ uri: urlToView }} 
      />
     );
}

export default WebViewSite;


