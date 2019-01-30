import React from 'react';
import { TouchableOpacity, Text, View, Image, Linking, Button, Alert } from 'react-native';

onPress3 = () => {
      Linking.openURL(this.data.url)
  }

onPress4 = () => {
      Alert.alert('Haberi beğendiniz!')
  }

const Detay = ({ data }) => {
const { containerStyle, subContainerStyle, ImageStyle, titleStyle, buttonViewStyle, buttonStyle, heartStyle} = styles;
return (
<View style={containerStyle}>

<View style={subContainerStyle}>
  <Text style={{fontWeight: "bold", marginTop: 5, marginBottom: 5}}> {data.title}</Text>
</View>

<View style={subContainerStyle}>
  <Image style={ImageStyle} source={{ url: data.image, cache: 'reload'}} />
</View>

<View style={buttonViewStyle}>

<TouchableOpacity
  style={styles.buttonStyle}
  onPress={this.onPress3}
>
  <Text style={{color: "white"}}>  Daha Fazla  </Text>
</TouchableOpacity>

<TouchableOpacity onPress={this.onPress4}>
  <Image
    style={styles.heartStyle}
    source={require('./img/kalp.png')}
  />
</TouchableOpacity>

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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,

},
subContainerStyle: {
  borderBottomWidth: 1,
  padding: 10,
  justifyContent: 'center',
  flexDirection: 'row',
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
  marginTop: 10,
},
}

export default Detay;
