import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView, textStyle } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';
import Ayarlar from './src/components/Ayarlar';
import OkulSitesi from './src/components/OkulSitesi';
import HeaderAyarlar from './src/components/HeaderAyarlar';
import HeaderOkulSitesi from './src/components/HeaderOkulSitesi';
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons'

class AnaSayfa extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header/>
        <Liste/>
      </SafeAreaView>
    );
  }
}

class OkulSitesiEkranı extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <OkulSitesi/>
      </SafeAreaView>
    );
  }
}

class AyarlarEkranı extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <HeaderAyarlar/>
        <Ayarlar/>
      </SafeAreaView>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  "Ana Sayfa" : {screen: AnaSayfa,
  navigationOptions:{
    tabBarLabel: "Ana Sayfa",
    tabBarIcon: ({tintColor})=>(
      <Icon name="home" color={tintColor} size={24} />
    )
  }
  },
  "Okul Sitesi" : {screen: OkulSitesiEkranı,
    navigationOptions:{
      tabBarLabel: "Okul Sitesi",
      tabBarIcon: ({tintColor})=>(
        <Icon name= "web" color={tintColor} size={24} />
      )
    }
   },
  "Ayarlar" : {screen: AyarlarEkranı,
    navigationOptions:{
      tabBarLabel: "Ayarlar",
      tabBarIcon: ({tintColor})=>(
        <Icon name="settings" color={tintColor} size={24} />
      )
    }
   },
},{
  initialRouteName: 'Ana Sayfa',
  activeTintColor: '#25337B',
  shifting: true,
  barStyle: { backgroundColor: 'white' },
}
);

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: "#25337B",
  },
  Yazı: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    marginTop: 30,
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  }
}




export default createAppContainer(TabNavigator);
