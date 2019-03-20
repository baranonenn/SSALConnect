import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView, textStyle } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';
import Ayarlar from './src/components/Ayarlar';
import OkulSitesi from './src/components/OkulSitesi';
import HeaderAyarlar from './src/components/HeaderAyarlar';
import HeaderOkulSitesi from './src/components/HeaderOkulSitesi';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons'

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

const TabNavigator = createBottomTabNavigator({
  "Ana Sayfa" : {screen: AnaSayfa,
  navigationOptions:{
    tabBarLabel: "Ana Sayfa",
    tabBarIcon: ({tintColor})=>(
      <Icon name="ios-home" color={tintColor} size={24} />
    )
  }
  },
  "Okul Sitesi" : {screen: OkulSitesiEkranı,
    navigationOptions:{
      tabBarLabel: "Okul Sitesi",
      tabBarIcon: ({tintColor})=>(
        <Icon name= "ios-compass" color={tintColor} size={24} />
      )
    }
   },
  "Ayarlar" : {screen: AyarlarEkranı,
    navigationOptions:{
      tabBarLabel: "Ayarlar",
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
   },
});

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
