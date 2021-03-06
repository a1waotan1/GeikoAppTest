import React from 'react';
import {View,Text, StyleSheet, TextInput} from 'react-native';

import colors from 'GeikoAppTest/src/styles/colors.js';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.title}>メールアドレスでログイン</Text>
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
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container:{
    flex: 1,
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
  }
})