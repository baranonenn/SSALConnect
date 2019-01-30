import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView, textStyle } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';
import Ayarlar from './src/components/Ayarlar';
import Mesajlar from './src/components/Mesajlar';
import HeaderAyarlar from './src/components/HeaderAyarlar';
import HeaderMesajlar from './src/components/HeaderMesajlar';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

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

class MesajlarEkranı extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <HeaderMesajlar/>
        <Mesajlar/>
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
  "Ana Sayfa" : AnaSayfa,
  "Mesajlar" : MesajlarEkranı,
  "Ayarlar" : AyarlarEkranı
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
