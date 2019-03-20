import React from 'react';
import { ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const OkulSitesi = () => {
  return (
    <ScrollView style={{backgroundColor: '#f8f8f8'}}>
    <WebView
      source={{ uri: "http://sabancilisesi.meb.k12.tr/" }}
      style={{ height: 1000 , flexDirection: "row", flex:1 }}
    />
    </ScrollView>
  );
};

const styles = {
headerTextStyle: {
  fontSize: 40,
  fontWeight: "bold",
  color: "white"
},
headerViewStyle: {
  marginTop: 40,
  marginBottom: 10,
  height: 49,
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0
}
}

export default OkulSitesi;
