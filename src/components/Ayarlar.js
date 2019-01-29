import React from 'react';
import { Button, Text, ScrollView, View, Image, Linking } from 'react-native';

const Ayarlar = () => {
  const { textStyle, subContainerStyle, AccountStyle, bigTextStyle} = styles;
  return (
    <ScrollView>
    <View style={AccountStyle}>
        <Image source={require('./img/my-icon.png')} style={{ width:60 , height:40}} />
        <Text style={bigTextStyle}>Baran Önen </Text>
    </View>
<View style={{width: 10000, height: 40, backgroundColor: '#f8f8f8'}} />
    <View style={subContainerStyle}>
      <Text style={textStyle}>Bu sürüm, test amacıyla yayınlanan bir sürümdür. Bazı özellikler eksik olabilir/beklendiği gibi çalışmayabilir. Bulduğunuz hataları lütfen bildiriniz.</Text>
    <Button
      onPress={() => {
        Linking.openURL("mailto: baranonenn@gmail.com?subject=SSALConnect Geri Bildirim");
      }}
      title="Geri Bildirim"
    />
    </View>
    </ScrollView>
  );
};

const styles = {
  bigTextStyle: {
    fontSize: 40,
  },
  TextStyle: {
    fontSize: 30,
  },
  AccountStyle: {
    marginTop: 40,
    flexDirection: "row",
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'auto',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  },
  subContainerStyle: {
    marginTop: 40,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  },
imageStyle: {
  height: 300,
  flex: 1
},
}


export default Ayarlar;
