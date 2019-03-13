import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { WebView } from 'react-native-webview';

const OkulSitesi = () => {
  return (
    <ScrollView style={{backgroundColor: '#f8f8f8'}}>
    <WebView
      source={{ uri: "https://baranonen.com/" }}
      style={{ height: 600 , flexDirection: "row", flex:1 }}
    />
    </ScrollView>
  );
};



export default OkulSitesi;
