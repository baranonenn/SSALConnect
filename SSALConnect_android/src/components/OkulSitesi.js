import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons'

onPress6 = () => {
  goBack();
}

const OkulSitesi = () => {
  return (
    <View style={{flex:1}}>
      <WebView
        source={{ uri: "http://sabancilisesi.meb.k12.tr/" }}
        style={{ height: 1000 , flexDirection: "row", flex:1 }}
      />
      </View>
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
},
buttonStyle: {
  marginLeft: 10,
  marginRight: 10,
},
}

export default OkulSitesi;
