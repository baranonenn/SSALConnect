import React from 'react';
import { Text, View, Button, Image, Linking, Alert, Clipboard } from 'react-native';


onPress4 = () => {
      Alert.alert('Haberi beğendiniz!')
  }

const Detay = ({ data }) => {
const { containerStyle, subContainerStyle, ImageStyle, titleStyle, buttonViewStyle, buttonStyle, heartStyle} = styles;
return (
  
<View style={containerStyle}>

<View style={subContainerStyle}>

<View style={{flexDirection: "row", justifyContent: "space-between"}}>
<View style={{ flexDirection: "row", alignItems: "flex-start"}}>
  <Text style={{fontSize: 20, fontWeight: "bold"}}>{data.day} </Text>
  <Text style={{fontSize: 20, fontWeight:  "bold"}}>{data.month}</Text>
</View>
  <Text style={{fontSize: 15, fontWeight: "200"}}>{data.type}</Text>
</View>

</View>

<View style={subContainerStyle}>

  <Text style={{marginTop: 5, marginBottom: 5, alignItems: "center", fontWeight:  "600"}}>{data.title}</Text>
</View>

<View style={subContainerStyle}>
  <Image style={ImageStyle} source={{ uri: data.image, cache: 'reload'}} />
</View>

<View style={subContainerStyle}>
  <Text style={{ marginTop: 5, marginBottom: 5 }}>{data.description}</Text>
</View>

<View style={buttonViewStyle}>



<Button style={{marginLeft: 15, marginTop: 15, marginBottom: 15}}
  onPress={() => {
    Linking.openURL(data.url);
  }}
  title="Daha Fazla"
/>



<Button style={{marginRight: 15, marginTop: 15, marginBottom: 15}}
  onPress={() => {
    Clipboard.setString(data.url);
    Alert.alert('Bağlantı kopyalandı');
  }}
  title="🔗"
/>


</View>

</View>
);
};

const styles = {

  containerStyle: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#cbced9',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#cbced9',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    padding: 0,

},
subContainerStyle: {
  borderBottomWidth: 1,
  padding: 10,
  justifyContent: 'center',
  borderColor: 'gray',
  position: 'relative'
},
ImageStyle: {
  height: 250,
  flex: 1
},
buttonViewStyle: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
buttonStyle: {
  backgroundColor: '#25337B',
  padding: 5,
  marginBottom: 10,
  marginTop: 10,
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 1
},
heartStyle: {
  height: 30,
  width: 30,
  marginRight: 15,
  marginTop: 5,
},
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

export default Detay;
