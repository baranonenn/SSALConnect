import React from 'react';
import { Text, View } from 'react-native';

const HeaderAyarlar = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> Ayarlar</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  },
  viewStyle: {
    marginTop: 40,
    marginBottom: 10,
    height: 49,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  }
}





export default HeaderAyarlar;
