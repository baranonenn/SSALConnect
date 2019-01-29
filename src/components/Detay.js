import React from 'react';
import { Text, View, Image, Linking, Button, Alert } from 'react-native';


const Detay = ({ data }) => {
const { containerStyle, subContainerStyle, ImageStyle, titleStyle, buttonViewStyle, buttonStyle, heartStyle} = styles;
return (
<View style={containerStyle}>

<View style={subContainerStyle}>
  <Text style={{fontWeight: "bold"}}> {data.title}</Text>
</View>

<View style={subContainerStyle}>
  <Image style={ImageStyle} source={{ url: data.image}} />
</View>

<View style={buttonViewStyle}>
<Button style={buttonStyle}
  onPress={() => {
    Linking.openURL(data.url);
  }}
  title="  Daha Fazla"
/>
<Button style={heartStyle}
  onPress={() => {
    Alert.alert('Haberi beğendiniz!');
  }}
  title="❤️    "
/>
</View>

</View>
);
};

const styles = {

  containerStyle: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#cbced9',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: '#cbced9',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 0,
    marginTop: 10,

},
subContainerStyle: {
  borderBottomWidth: 1,
  padding: 5,
  justifyContent: 'center',
  flexDirection: 'row',
  borderColor: '#cbced9',
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
heartStyle: {
  flex: 1,
  alignItems: "flex-end"
},
heartStyle: {
  flex: 1,
}
}

export default Detay;
