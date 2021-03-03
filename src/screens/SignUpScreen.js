import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import colors from 'GeikoAppTest/src/styles/colors.js';
import Icon from 'react-native-vector-icons/Feather';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.title}>メールアドレスで新規登録</Text>
        <Text style = {styles.subTitle}>メールアドレスを入力してください</Text>
      </View>
        <View style={styles.inputContainer}>
        <TextInput
        autoFocus={true}
        autoCapitalize='none'
        numberOfLines={1}
        keyboardType="email-address"
        />
        </View>
          <KeyboardAvoidingView
          behavior='padding'>
          <TouchableOpacity onPress={()=> navigation.navigate('SignUp2')}>
          <View style={styles.nextButton}>
            <Icon name="arrow-right" size={24} color="#fff"/>
            </View>
          </TouchableOpacity>
          </KeyboardAvoidingView>  
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title:{
    fontSize:22,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subTitle:{
    fontSize:13,
    marginTop: 24,
    marginBottom: 40,
  },
  inputContainer:{
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    borderBottomColor: colors.primary,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 44,
  },
  nextButton:{
    backgroundColor:colors.dark,
    width: 70,
    height: 70,
    borderRadius:100,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center', 
  }
})