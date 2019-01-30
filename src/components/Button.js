import React from 'react';
import { TouchableOpacity, Text, View, Linking } from 'react-native';

const Button = ({ onPress, children }) => {

return(
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={onPress3}
  >
    <Text style={{color: "white"}}>  {children} </Text>
  </TouchableOpacity>
);
};

const styles = {
buttonStyle: {
  backgroundColor: '#25337B',
  padding: 15,
  marginBottom: 15,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 1
}
}

export default Button;
