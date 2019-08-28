import React from 'react';
import { Text, View, StatusBar} from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <StatusBar
    barStyle= "light-content"
    backgroundColor= "#0f6089"
    />
      <Text style={textStyle}> SSALConnect</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  viewStyle: {
    backgroundColor: "#25337B",
    marginTop: 40,
    marginBottom: 10,
    height: 49,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0
  }
}



export default Header;
