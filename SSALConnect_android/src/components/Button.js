import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;
  return(
    <TouchableOpacity onpress={onPress} style={buttonStyle}>
    <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: "white"
  },
  buttonStyle: {
  backgroundColor: '#25337B',
  padding: 5,
  marginBottom: 10,
  marginTop: 10,
  marginLeft: 15,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 1
  },
}

export default Button;
