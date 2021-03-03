import React from 'react';
import {View, StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity,Alert, Dimensions } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import colors from 'GeikoAppTest/src/styles/colors.js';
import Button from 'GeikoAppTest/src/components/common/Button.js'
const { width } = Dimensions.get('window');

const StartScreen = ({navigation}) => {
  const renderContent = () => (
    <View style={styles.panel}>
       <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
      <View style={{alignItems: 'center'}}>
      <Text style={
        {
          fontSize:16,
          fontWeight: 'bold',
          marginBottom: 33,
        }
      }>ログイン / 新規登録</Text>
      
      <Button text='Twitterで続ける'  customStyles={{backgroundColor:'#55ACEE'}} />
      <Button text='FaceBookで続ける' customStyles={{backgroundColor:'#1877F2'}}/>
      <Button text='Appleで続ける' customStyles={{backgroundColor:'#000'}}/>
      <Button text='メールアドレスで続ける' 
      onPress={()=> navigation.navigate('SignUp')}
      customStyles={{backgroundColor:'#F0F0F0'}} 
      textCustomStyles={{color:'#000'}}
      />
  <TouchableOpacity style = {{
    marginBottom: 22
}}
onPress={()=> navigation.navigate('Login')}>
    <Text style = {{
        fontSize: 14,
        fontWeight:'700',
        marginBottom: 10,
    }}>
        メールアドレスでログイン</Text>
</TouchableOpacity>
<Text style = {{
  marginBottom: 25,
  textAlign: 'center',
}}>
上のボタンを押すと、利用規約とプライバシーポリシーに同意したことになります
</Text>
  </View>
  </View>
  );

  const sheetRef = React.useRef(null);

  return (
  <View style= {styles.container}>
 <BottomSheet
        ref={sheetRef}
        snapPoints={[535 ,300, 0]}
        borderRadius={30}
        renderContent={renderContent}
      />     
    <ImageBackground 
    source={require('GeikoAppTest/src/assets/images/homeBgImg.png')} 
    style={styles.image}>
      <SafeAreaView>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>
       
        <TouchableOpacity 
        onPress={() => sheetRef.current.snapTo(0)}>

          <View style={styles.button}>
              <Text style={styles.buttonTxt}>はじめる</Text>
          </View>
          </TouchableOpacity>
         
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
  },
  image:{
    flex: 1,
    resizeMode:'cover',
    alignItems: 'center',
  },
 button:{
    backgroundColor: colors.primary,
    height: 59,
    width: width / 1.3,
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 50,
    
 },
 buttonTxt:{
   fontSize: 18,
   textAlign: 'center',
   color: colors.white,
   fontWeight: 'bold',
 },
 panel: {
  padding: 20,
  backgroundColor: '#FFFFFF',
  paddingTop: 20,
 },
 panelHeader: {
  alignItems: 'center',
},
panelHandle: {
  width: 50,
  height: 8,
  borderRadius: 4,
  backgroundColor: '#00000040',
  marginBottom: 40,
},

});