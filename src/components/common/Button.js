import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width

const Button = ({text, onPress, type = 'filled', bordered = false, size = 'large', }) =>{
    const large = width / 1.3
        const small = width / 2
        const btnSize = size === 'large' ? large : small
        const btnBgColor = type === 'filled' ? '#242225' : 'transparent'
        const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2'
        const btnBorderRadius = bordered ? 30 : 5

        const containerCommonStyle = {
            backgroundColor: btnBgColor,
            paddingVertical: 8,
            width: btnSize,
            borderRadius: btnBorderRadius
          }
        
          const textCommonStyle = {
            color: btnTextColor,
            fontSize: 18,
            textAlign: 'center',
          }
        
          const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }
        
          return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
              <View style={[containerCommonStyle, border]}>
                <Text style={[textCommonStyle]}> {text} </Text>
              </View>
            </TouchableOpacity>
    )
}

  
  export default Button