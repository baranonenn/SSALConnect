import React from 'react';
import { Text, View } from 'react-native';

const HeaderMesajlar = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Mesajlar</Text>
      <View style={{width: 10000, height: 1, backgroundColor: '#F1F1F1'}} />
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  viewStyle: {
    marginTop: 40,
    height: 49,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  }
}




export default HeaderMesajlar;
