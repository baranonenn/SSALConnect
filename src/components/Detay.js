import React from 'react';
import { Text, View, Image, Linking, Button } from 'react-native';


const Detay = ({ data }) => {
const { containerStyle, subContainerStyle, ImageStyle, titleStyle} = styles;
return (
<View style={containerStyle}>

<View style={subContainerStyle}>
  <Text> {data.title}</Text>
</View>

<View style={subContainerStyle}>
  <Image style={ImageStyle} source={{ url: data.image}} />
</View>

<Button
  onPress={() => {
    Linking.openURL(data.url);
  }}
  title="Daha Fazla"
/>

</View>
);
};

const styles = {

  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginTop: 10,

  },
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
},
subContainerStyle: {
  borderBottomWidth: 1,
  padding: 5,
  backgroundColor: '#fff',
  justifyContent: 'center',
  flexDirection: 'row',
  borderColor: '#ddd',
  position: 'relative'
},
ImageStyle: {
  height: 300,
  flex: 1
}



}

export default Detay;
