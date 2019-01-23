import React, { Component } from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';
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

class Mesajlar extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>Mesajlar</Text>
        <Button
          title="Ana Sayfaya Dön"
          onPress={() => this.props.navigation.goBack()}
        />
      </SafeAreaView>
    );
  }
}

class Ayarlar extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>Ayarlar</Text>
        <Button
          title="Ana Sayfaya Dön"
          onPress={() => this.props.navigation.goBack()}
        />
      </SafeAreaView>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  "Ana Sayfa" : AnaSayfa,
  "Mesajlar" : Mesajlar,
  "Ayarlar" : Ayarlar
});

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold"
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
