import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const width = Dimensions.get('window').width

const Button = ({text, onPress, customStyles, textCustomStyles}) =>{
  const defaultStyles={
    width: width / 1.3,
    height: 59,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  }
  const textDefaultStyles = {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
          return (
            <TouchableOpacity onPress={onPress}>
            <View style ={[defaultStyles, customStyles]} >
                <Text style ={[textDefaultStyles, textCustomStyles]}>
                {text}</Text>
                </View>
        </TouchableOpacity>
    );
};
  
  export default Button