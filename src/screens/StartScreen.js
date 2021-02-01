import React from 'react';
import {View, StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity,Alert, Dimensions } from 'react-native';

import {BottomPopUp} from 'GeikoAppTest/src/screens/BottomPopUpModal'
import colors from 'GeikoAppTest/src/styles/colors.js';

const { width } = Dimensions.get('window');

const StartScreen =()=> {
  let popupRef = React.createRef()

  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
  }

  return (

  <View style= {styles.container}>
    <ImageBackground 
    source={require('GeikoAppTest/src/assets/images/homeBgImg.png')} 
    style={styles.image}>
      <SafeAreaView style= {styles.subContainer}>
      <View style={{
        flex: 2,
        justifyContent: 'flex-end',
      }}>
      <TouchableOpacity onPress={onShowPopup}>
        <View style={styles.button}>
            <Text style={styles.buttonTxt}>はじめる</Text>
        </View>
        </TouchableOpacity>
        <BottomPopUp
          title="ログイン / 新規登録"
          ref={(target) => popupRef = target}
          onTouchOutside={onClosePopup}
        />
        </View>
        </SafeAreaView>
    </ImageBackground>
  </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column"
  },
  image:{
    flex: 1,
    resizeMode:'cover',
    alignItems: 'center',
  },
  subContainer:{
    margin: 20,
  },
 button:{
    backgroundColor: colors.primary,
    height: 59,
    width: width / 1.3,
    justifyContent: 'center',
    borderRadius: 30,
    
 },
 buttonTxt:{
   fontSize: 18,
   textAlign: 'center',
   color: colors.white,
   fontWeight: 'bold',
 }
});