import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> SSALConnect</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 40,
    fontWeight: "bold"
  },
  viewStyle: {
    marginTop: 40,
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  }
}



export default Header;
