import React from 'react';
import { TouchableOpacity, Button, Text, ScrollView, View, Image, Linking } from 'react-native';

const Ayarlar = () => {
  const { textStyle, subContainerStyle, accountStyle, bigTextStyle, buttonStyle} = styles;
  return (
    <ScrollView style={{backgroundColor: '#f8f8f8'}}>
<View style={{ marginTop: 40}}>
    <View style={{width: 10000, height: 2, backgroundColor: '#ebebeb'}} />

    <View style={accountStyle}>
        <Image source={require('./img/kullanıcı.png')} style={{ width:60 , height:40, marginBottom:10}} />
        <Text style={bigTextStyle}>Beta Kullanıcısı </Text>
    </View>
    <View style={{width: 10000, height: 2, backgroundColor: '#ebebeb'}} />
<View style={{width: 10000, height: 40, backgroundColor: '#f8f8f8'}} />

    <View style={subContainerStyle}>
        <View style={{width: 10000, height: 2, backgroundColor: '#ebebeb'}} />
        <View style={{ backgroundColor: "white" }}/>
        <View style={{width: 10000, height: 10, backgroundColor: 'white'}} />
      <Text style={textStyle}>Bu sürüm, test amacıyla yayınlanan bir sürümdür. Bazı özellikler eksik olabilir/beklendiği gibi çalışmayabilir. Bulduğunuz hataları lütfen bildiriniz.</Text>
      <View style={{width: 10000, height: 20, backgroundColor: '#f8f8f8'}} />
      <View style={{flexDirection:"row"}}>
             <TouchableOpacity
               style={styles.buttonStyle}
               onPress={this.onPress}
             >
               <Text style={{color: "white"}}>  Geri Bildirim  </Text>
             </TouchableOpacity>
             <View style={{width: 10, height: 20, backgroundColor: '#f8f8f8'}} />
             <TouchableOpacity
               style={styles.buttonStyle}
               onPress={this.onPress2}
             >
               <Text style={{color: "white"}}>  Açık Kaynak Kodları  </Text>
             </TouchableOpacity>
             </View>
                     <View style={{width: 10000, height: 1, backgroundColor: '#ebebeb'}} />
             </View>
             </View>
          </ScrollView>
        );
      };

onPress = () => {
      Linking.openURL("mailto: baranonenn@gmail.com?subject=SSALConnect Geri Bildirim")
  }

  onPress2 = () => {
        Linking.openURL("https://github.com/baranonen/SSALConnect")
    }

const styles = {
  bigTextStyle: {
    fontSize: 40,
    marginBottom: 5,
  },
  TextStyle: {
    fontSize: 30,
    marginTop: 20,
    backgroundColor: "white",
  },
  accountStyle: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'auto',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  },
  subContainerStyle: {
    backgroundColor: "white",
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
buttonStyle: {
  backgroundColor: '#25337B',
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 1
},
}


export default Ayarlar;
