import React from 'react';
import { TouchableOpacity, Text, ScrollView, View, Image, Linking } from 'react-native';

const Ayarlar = () => {
  const { textStyle, subContainerStyle } = styles;
  return (
    <ScrollView style={{backgroundColor: '#f8f8f8'}}>

<View style={{width: 10000, height: 40, backgroundColor: '#f8f8f8'}} />

    <View style={subContainerStyle}>
        <View style={{width: 10000, height: 2, backgroundColor: '#ebebeb'}} />
        <View style={{ backgroundColor: "#f8f8f8" }}/>
        <View style={{width: 10000, height: 10, backgroundColor: '#f8f8f8'}} />
        <View style={{marginLeft: 15, marginRight: 15}}>
      <Text style={textStyle}>Bu sürüm, test amacıyla yayınlanan bir sürümdür. Bazı özellikler eksik olabilir ve beklendiği gibi çalışmayabilir. Bulduğunuz hataları lütfen bildiriniz.</Text>
      </View>
      <View style={{width: 10000, height: 20, backgroundColor: '#f8f8f8'}} />
      <View style={{flexDirection:"row"}}>
             <TouchableOpacity
               style={styles.buttonStyle}
               onPress={this.onPress}
             >
               <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Geri Bildirim</Text>
             </TouchableOpacity>
             <TouchableOpacity
               style={styles.buttonStyle}
               onPress={this.onPress2}
             >
               <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>GitHub</Text>
             </TouchableOpacity>
             </View>
                     <View style={{width: 10000, height: 1, backgroundColor: '#ebebeb'}} />
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
    backgroundColor: "#f8f8f8",
  },
  accountStyle: {
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'auto',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  },
  subContainerStyle: {
    backgroundColor: "#f8f8f8",
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
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#cbced9',
    flex: 1,
    backgroundColor: '#25337B',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
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


export default Ayarlar;
